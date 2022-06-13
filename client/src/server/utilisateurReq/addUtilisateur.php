<?php

require_once "../modele/utilisateurDB.php";

$pw_hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

echo addUtilisateur($_POST['login'],$pw_hash);