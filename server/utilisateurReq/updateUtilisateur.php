<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/utilisateur.php";

$updateUtilisateur = json_decode($_POST['updateUtilisateur'],true);

$pw_hash = password_hash($updateUtilisateur['password'], PASSWORD_DEFAULT);

$utilisateurs = getAllUtilisateur();

if (userExists($updateUtilisateur['id'])){
    foreach ($utilisateurs as $utilisateur){
        if(str_replace(' ', '', strtolower($utilisateur['login']))===str_replace(' ', '', strtolower($updateUtilisateur['login'])) && $utilisateur['id']!=$updateUtilisateur['id']){
            echo json_encode(['message' => 'login déjà utilisé', 'erreur' => true]);
            exit;
        }
    }
    echo updateUtilisateur($updateUtilisateur['id'], $updateUtilisateur['login'], $pw_hash);
} else {
    echo json_encode(['message' => 'utilisateur introuvable', 'erreur' => true]);
}
