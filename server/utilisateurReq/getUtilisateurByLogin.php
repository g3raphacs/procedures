<?php

require_once "../modele/utilisateurDB.php";
require_once "../fonction/utilisateur.php";

$getUtilisateurById = json_decode($_POST['login'], true);

$utilisateurs = getAllUtilisateur();

if (userExists($getUtilisateurById['id'])){
    echo json_encode(getUtilisateurByLogin($getUtilisateurById['login']));
} else {
    echo json_encode(['message' => 'utilisateur non existant']);
}
