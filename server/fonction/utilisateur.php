<?php

require_once "modele/utilisateurDB.php";

function connexion($login, $password) {
    $utilisateur = getUtilisateurByLogin($login);
    if (!$utilisateur) {
        return false;
    }
    if (!password_verify($password, $utilisateur['password'])){
        return false;
    }
    return true;
}

function userExists($idUtilisateur){
    $utilisateurs = getAllUtilisateur();
    foreach ($utilisateurs as $utilisateur){
        if ($utilisateur['id']==$idUtilisateur){
            return true;
        }
    }
    return false;
}