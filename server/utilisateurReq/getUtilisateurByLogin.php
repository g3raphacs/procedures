<?php

require_once "../modele/utilisateurDB.php";

$getUtilisateurById = json_decode($_POST['login'], true);

echo json_encode(getUtilisateurByLogin($getUtilisateurById['login']));