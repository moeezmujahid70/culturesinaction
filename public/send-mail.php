<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid request.']);
    exit;
}

if (!empty($payload['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$config = [
    'smtp_host' => '',
    'smtp_port' => 465,
    'smtp_username' => '',
    'smtp_password' => '',
    'mail_from' => '',
    'mail_from_name' => 'Cultures in Action Website',
    'mail_to' => '',
];

$configPath = dirname(__DIR__) . '/culturequest-mail-config.php';
if (is_readable($configPath)) {
    $fileConfig = require $configPath;
    if (is_array($fileConfig)) {
        $config = array_merge($config, $fileConfig);
    }
}

function clean_text($value): string
{
    return trim(str_replace(["\r", "\0"], '', (string) $value));
}

function fail_request(string $message): void
{
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => $message]);
    exit;
}

$topic = clean_text($payload['topic'] ?? '');
$name = clean_text($payload['name'] ?? '');
$email = clean_text($payload['email'] ?? '');
$organization = clean_text($payload['organization'] ?? '');
$position = clean_text($payload['position'] ?? '');
$message = clean_text($payload['message'] ?? '');

if ($topic === '') {
    fail_request('Please select a topic.');
}

if ($name === '') {
    fail_request('Please enter your name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail_request('Please enter a valid email address.');
}

if ($message === '') {
    fail_request('Please enter your message.');
}

$requiredConfigKeys = ['smtp_host', 'smtp_username', 'smtp_password', 'mail_from', 'mail_to'];
foreach ($requiredConfigKeys as $key) {
    if (clean_text($config[$key] ?? '') === '') {
        http_response_code(500);
        echo json_encode([
            'ok' => false,
            'message' => 'Mail is not configured. Please email us directly.',
        ]);
        exit;
    }
}

$subject = sprintf('%s from %s', $topic, $name);
$bodyLines = [
    'Topic: ' . $topic,
    'Name: ' . $name,
    'Email: ' . $email,
];

if ($organization !== '') {
    $bodyLines[] = 'Organization: ' . $organization;
}

if ($position !== '') {
    $bodyLines[] = 'Position: ' . $position;
}

$bodyLines[] = 'Message:';
$bodyLines[] = $message;

$textBody = implode("\r\n", $bodyLines);

function smtp_read($socket): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function smtp_command($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    $response = smtp_read($socket);
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP command failed.');
    }
    return $response;
}

function header_encode(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function mailbox(string $email, string $name = ''): string
{
    if ($name === '') {
        return '<' . $email . '>';
    }

    return header_encode($name) . ' <' . $email . '>';
}

try {
    $host = (string) $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $socket = fsockopen('ssl://' . $host, $port, $errno, $errstr, 20);

    if (!$socket) {
        throw new RuntimeException('Could not connect to SMTP server.');
    }

    stream_set_timeout($socket, 20);
    $greeting = smtp_read($socket);
    if ((int) substr($greeting, 0, 3) !== 220) {
        throw new RuntimeException('SMTP server rejected connection.');
    }

    smtp_command($socket, 'EHLO culturesinaction.net', [250]);
    smtp_command($socket, 'AUTH LOGIN', [334]);
    smtp_command($socket, base64_encode((string) $config['smtp_username']), [334]);
    smtp_command($socket, base64_encode((string) $config['smtp_password']), [235]);
    smtp_command($socket, 'MAIL FROM:<' . $config['mail_from'] . '>', [250]);
    smtp_command($socket, 'RCPT TO:<' . $config['mail_to'] . '>', [250, 251]);
    smtp_command($socket, 'DATA', [354]);

    $headers = [
        'Date: ' . date(DATE_RFC2822),
        'From: ' . mailbox((string) $config['mail_from'], (string) $config['mail_from_name']),
        'To: ' . mailbox((string) $config['mail_to']),
        'Reply-To: ' . mailbox($email, $name),
        'Subject: ' . header_encode($subject),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: Cultures in Action Website',
    ];

    $data = implode("\r\n", $headers) . "\r\n\r\n" . $textBody;
    $data = preg_replace('/^\./m', '..', $data);
    fwrite($socket, $data . "\r\n.\r\n");

    $dataResponse = smtp_read($socket);
    if ((int) substr($dataResponse, 0, 3) !== 250) {
        throw new RuntimeException('SMTP server rejected message.');
    }

    smtp_command($socket, 'QUIT', [221]);
    fclose($socket);

    echo json_encode(['ok' => true]);
} catch (Throwable $error) {
    if (isset($socket) && is_resource($socket)) {
        fclose($socket);
    }

    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'We could not send your message right now. Please email us directly.',
    ]);
}
