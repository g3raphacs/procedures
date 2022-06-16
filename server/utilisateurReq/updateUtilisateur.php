<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";

$updateUtilisateur = json_decode($_POST['updateUtilisateur'],true);

$pw_hash = password_hash($updateUtilisateur['password'], PASSWORD_DEFAULT);

$utilisateurs = getAllUtilisateur();

$exicte = false;

foreach ($utilisateurs as $utilisateur){
    if ($utilisateur['id']==$updateUtilisateur['id']){
        $exicte = true;
        break;
    }
}

if ($exicte){
    foreach ($utilisateurs as $utilisateur){
        if(str_replace(' ', '', strtolower($utilisateur['login']))===str_replace(' ', '', strtolower($updateUtilisateur['login']))){
            echo json_encode(['message' => 'login déja utilisé']);
            exit;
        }
    }
    echo updateUtilisateur($updateUtilisateur['id'], $updateUtilisateur['login'], $pw_hash);
} else {
    echo json_encode(['message' => 'utilisateur introuvable']);
}
