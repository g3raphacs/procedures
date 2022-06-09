<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/son');

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(405);
    echo json_encode(['message' => 'Méthode non autrisée']);
    exit;
}

if (isset($_SERVER['Authorization'])){
    $token = trim($_SERVER['Authorization']);
}elseif (isset($_SERVER['HTTP_AUTHORIZATION'])){
    $token = trim($_SERVER['HTTP_AUTHORIZATION']);
}elseif (function_exists('apache_request_headers')){
    $requestHeaders = apache_request_headers();
    if (isset($requestHeaders['Authorization'])){
        $token = trim($requestHeaders['Authorization']);
    }
}

if(!isset($token) || !preg_match('/Bearer\s(\S+)/', $token, $matches)){
    http_response_code(400);
    echo json_encode(['message' => 'Token introuvable']);
    exit;
}

$token = str_replace('Bearer ','', $token);

require_once "includes/config.php";
require_once "../classes/JWT.php";


$jwt = new JWT();

if (!$jwt->isValid($token)){
    http_response_code(400);
    echo json_encode(['message' => 'Token invalide']);
    exit;
}

if (!$jwt->check($token, SECRET)){
    http_response_code(403);
    echo json_encode(['message' => 'Token invalide']);
    exit;
}

if ($jwt->isExpired($token)){
    http_response_code(403);
    echo json_encode(['message' => 'Token expiré']);
    exit;
}