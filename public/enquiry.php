<?php
/**
 * Axiontel enquiry form handler (for Apache / cPanel / Hostinger hosting).
 * Receives the JSON posted by the website form and emails it to inquiry@axiontel.co.
 *
 * Settings: change the three lines below if needed.
 * FROM_EMAIL should be a real mailbox on your domain (create it in cPanel > Email Accounts),
 * otherwise many hosts refuse to send or the mail lands in spam.
 */
const TO_EMAIL   = 'inquiry@axiontel.co';
const FROM_EMAIL = 'no-reply@axiontel.co';
const FROM_NAME  = 'Axiontel Website';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reply($code, $data) { http_response_code($code); echo json_encode($data); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, ['error' => 'Method not allowed.']);

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) reply(400, ['error' => 'Invalid request.']);

function clean($v, $max = 200) {
  $v = is_scalar($v) ? (string)$v : '';
  $v = preg_replace('/[\x00-\x08\x0B-\x1F\x7F]/u', '', $v);
  return mb_substr(trim($v), 0, $max);
}

// Spam checks: honeypot filled, or form submitted faster than a person could fill it.
if (clean($body['website'] ?? '') !== '' || (int)($body['elapsedMs'] ?? 0) < 2500) reply(200, ['ok' => true]);

// Simple rate limit: 5 submissions per IP per 10 minutes.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rlFile = sys_get_temp_dir() . '/axiontel_rl_' . md5($ip);
$now = time();
$hits = array_filter(@json_decode(@file_get_contents($rlFile), true) ?: [], fn($t) => $now - $t < 600);
$hits[] = $now;
@file_put_contents($rlFile, json_encode(array_values($hits)));
if (count($hits) > 5) reply(429, ['error' => 'Too many submissions. Please call us or try again in a few minutes.']);

$fields = [
  'formType' => 'Form', 'name' => 'Full name', 'company' => 'Business / organisation', 'phone' => 'Phone',
  'email' => 'Email', 'city' => 'City / State', 'industry' => 'Industry', 'businessType' => 'Business type',
  'product' => 'Product interest', 'quantity' => 'Quantity', 'use' => 'Intended use',
  'contactTime' => 'Preferred contact time', 'message' => 'Message', 'sourcePage' => 'Submitted from', 'utm' => 'UTM',
];
$d = [];
foreach ($fields as $k => $label) $d[$k] = clean($body[$k] ?? '', $k === 'message' ? 2000 : 200);

if ($d['name'] === '' || $d['phone'] === '' || $d['email'] === '') reply(400, ['error' => 'Please fill in your name, phone and email.']);
if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL)) reply(400, ['error' => 'Please enter a valid email address.']);
if (!preg_match('/^[0-9+\-\s()]{8,20}$/', $d['phone'])) reply(400, ['error' => 'Please enter a valid phone number.']);
if (clean($body['consent'] ?? '') !== 'yes') reply(400, ['error' => 'Please accept the consent checkbox.']);

$noNewline = fn($s) => str_replace(["\r", "\n"], ' ', $s);
$subject = ($d['formType'] ?: 'Enquiry') . ': ' . $d['name'] . ($d['company'] ? " ({$d['company']})" : '') . ($d['product'] ? " - {$d['product']}" : '');
$subject = '=?UTF-8?B?' . base64_encode($noNewline($subject)) . '?=';

$rows = '';
foreach ($fields as $k => $label) {
  if ($d[$k] === '') continue;
  $rows .= '<tr><td style="border:1px solid #e3e9f6;background:#f3f7ff;font-weight:bold;white-space:nowrap">' . htmlspecialchars($label)
         . '</td><td style="border:1px solid #e3e9f6">' . nl2br(htmlspecialchars($d[$k])) . '</td></tr>';
}
date_default_timezone_set('Asia/Kolkata');
$html = '<div style="font-family:Arial,sans-serif;color:#050a2e"><h2 style="color:#2440ff;margin:0 0 12px">New '
      . htmlspecialchars($d['formType'] ?: 'enquiry') . ' from axiontel.co</h2><table cellpadding="8" style="border-collapse:collapse;font-size:14px">'
      . $rows . '</table><p style="font-size:12px;color:#6b7290">Received ' . date('d M Y, h:i A') . ' IST</p></div>';

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/html; charset=UTF-8',
  'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
  'Reply-To: ' . $noNewline($d['name']) . ' <' . $d['email'] . '>',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail(TO_EMAIL, $subject, $html, implode("\r\n", $headers), '-f' . FROM_EMAIL);
if (!$sent) reply(502, ['error' => "We couldn't send your enquiry. Please call us or email sales@axiontel.co."]);

reply(200, ['ok' => true]);
