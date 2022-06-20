<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/utilisateur.php";

$utilisateurs = getAllUtilisateur();

$deleteUtilisateur = json_decode($_POST['id'],true);

if (userExists($deleteUtilisateur['id'])){
    echo deleteUtilisateur($deleteUtilisateur['id']);
} else {
    echo json_encode(['message' => 'utilisateur introuvable', 'erreur' => true]);
}

