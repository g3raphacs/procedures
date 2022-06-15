<?php

class JWT {
    public function generateToken(array $header, array $payload, string $secret, int $validity = 86400) : string
    {
        if ($validity > 0) {
            $now = new DateTime();
            $expiration = $now->getTimestamp() + $validity;
            $payload['iat'] = $now->getTimestamp();
            $payload['exp'] = $expiration;
        }

        $base64Header = base64_encode(json_encode($header));
        $base64Payload = base64_encode(json_encode($payload));

        $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], $base64Header);
        $base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], $base64Payload);

        //signature
        $secret = base64_encode($secret);
        $base64Signature = hash_hmac('sha256', $base64Header . '.' . $base64Payload, $secret, true);

        $base64Signature = base64_encode($base64Signature);

        $signature = str_replace(['+', '/', '='], ['-', '_', ''], $base64Signature);

        return $base64Header . '.' . $base64Payload . '.' . $signature;
    }

    public function check(string $token, string $secret) : bool {
        $header = $this->getHeader($token);
        $payload = $this->getPayload($token);

        $verifToken = $this->generateToken($header, $payload, $secret, 0);

        return $verifToken === $token;
    }

    public function getHeader($token){
        $array = explode('.', $token);
        $header = json_decode(base64_decode($array[0]),true);
        return $header;
    }

    public function getPayload($token){
        $array = explode('.', $token);
        $payload = json_decode(base64_decode($array[1]),true);
        return $payload;
    }

    public function isExpired($token) : bool {
        $payload = $this->getPayload($token);
        $now = new DateTime();

        return $payload['exp'] < $now->getTimestamp();
    }

    public function isValid($token) : bool {
        return preg_match(
            '/^[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+$/',
                $token
        ) === 1;
    }
}