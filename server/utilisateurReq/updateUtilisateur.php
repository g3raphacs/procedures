<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";

$updateUtilisateur = json_decode($_POST['updateUtilisateur'],true);

$pw_hash = password_hash($updateUtilisateur['password'], PASSWORD_DEFAULT);

echo updateUtilisateur($updateUtilisateur['id'], $updateUtilisateur['login'], $pw_hash);