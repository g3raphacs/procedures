<?php

require_once "../modele/utilisateurDB.php";

$addUtilisateur = json_decode($_POST['addUtilisateur'], true);

$pw_hash = password_hash($addUtilisateur['password'], PASSWORD_DEFAULT);

echo addUtilisateur($addUtilisateur['login'],$pw_hash);