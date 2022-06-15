<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";

$pw_hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

echo updateUtilisateur($_POST['id'], $_POST['login'], $pw_hash);