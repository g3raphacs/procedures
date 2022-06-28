<?php

require_once "modele/utilisateurDB.php";
require_once "fonction/utilisateur.php";
require_once "jwt/includes/config.php";
require_once "classes/JWT.php";
require_once "fonction/tokenCreation.php";

$connexion = json_decode($_POST['connexion'], true);

$login = $connexion['login'];
$password = $connexion['password'];

$connexionToken = [
  "connexion" => connexion($login, $password),
  "token" => tokenCreation($login)
];

if (connexion($login, $password)) {
    echo json_encode($connexionToken);
} else {
    echo json_encode([
        "connexion" => connexion($login, $password)
    ]);
}