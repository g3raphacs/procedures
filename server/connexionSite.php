<?php

require_once "fonction/utilisateur.php";
require_once "jwt/includes/config.php";
require_once "classes/JWT.php";
require_once "fonction/tokenCreation.php";

$login = $_POST['login'];
$password = $_POST['password'];

$connexionToken = [
  "connexion" => connexion($login, $password),
  "token" => tokenCreation($login)
];

if (connexion($login, $password)) {
    echo json_encode($connexionToken);
} else {
    echo json_encode(connexion($login, $password));
}