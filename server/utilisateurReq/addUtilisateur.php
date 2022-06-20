<?php

require_once "../modele/utilisateurDB.php";

$addUtilisateur = json_decode($_POST['addUtilisateur'], true);

$pw_hash = password_hash($addUtilisateur['password'], PASSWORD_DEFAULT);

$utilisateurs = getAllUtilisateur();

foreach ($utilisateurs as $utilisateur){
    if(str_replace(' ', '', strtolower($utilisateur['login'])) === str_replace(' ', '', strtolower($addUtilisateur['login']))){
        echo json_encode(['message' => 'login déjà utilisé', 'erreur' => true]);
        exit;
    }
}

echo addUtilisateur($addUtilisateur['login'],$pw_hash);