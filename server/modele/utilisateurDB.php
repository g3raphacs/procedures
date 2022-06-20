<?php

require_once "connexionBDD.php";

function getUtilisateurByLogin($login){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM utilisateur WHERE login=:login");
    $req->bindParam(":login",$login,PDO::PARAM_STR);
    $req->execute();
    return $req->fetch(PDO::FETCH_ASSOC);
}

function addUtilisateur($login, $password){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO utilisateur VALUES (NULL, :login, :password)");
    $req->bindParam(":login",$login, PDO::PARAM_STR);
    $req->bindParam(":password",$password, PDO::PARAM_STR);
    $req->execute();
    return json_encode(['message' => 'utilisateur ajouté', 'erreur' => false]);
}

function updateUtilisateur($id, $login, $password){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("UPDATE utilisateur SET login=:login, password=:password WHERE id=:id");
    $req->bindParam(":id",$id, PDO::PARAM_INT);
    $req->bindParam(":login",$login, PDO::PARAM_STR);
    $req->bindParam(":password",$password, PDO::PARAM_STR);
    $req->execute();
    return json_encode(['message' => 'utilisateur modifié', 'erreur' => false]);
}

function deleteUtilisateur($id){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("DELETE FROM utilisateur WHERE id=:id");
    $req->bindParam(":id",$id, PDO::PARAM_INT);
    $req->execute();
    return json_encode(['message' => 'utilisateur supprimé', 'erreur' => false]);
}

function getAllUtilisateur() {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM utilisateur");
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}