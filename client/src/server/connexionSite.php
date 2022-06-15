<?php

require_once "fonction/utilisateur.php";
require_once "jwt/includes/config.php";
require_once "classes/JWT.php";
require_once "fonction/tokenCreation.php";

$login = $_POST['login'];
$password = $_POST['password'];

echo json_encode(connexion($login, $password));

if (connexion($login, $password)) {
    echo '.' .tokenCreation($login);
}