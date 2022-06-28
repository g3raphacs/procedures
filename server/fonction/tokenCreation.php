<?php

function tokenCreation ($login) {
    $header = [
        'typ' => 'JWT',
        'alg' => 'HS256'
    ];

    $payload = [
        'user' => $login
    ];
    $jwt = new JWT();
    $token = $jwt->generateToken($header, $payload, SECRET);
    return $token;
}