<?php

require_once "connexionBDD.php";

function getUtilisateurByLogin($login){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM utilisateur WHERE login=:login");
    $req->bindParam(":login",$login);
    $req->execute();
    return $req->fetch(PDO::FETCH_ASSOC);
}

function addUtilisateur($login, $password){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO utilisateur VALUES (NULL, :login, :password)");
    $req->bindParam(":login",$login);
    $req->bindParam(":password",$password);
    $req->execute();
    return json_encode('ok');
}

function updateUtilisateur($id, $login, $password){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("UPDATE utilisateur SET login=:login, password=:password WHERE id=:id");
    $req->bindParam(":id",$id, PDO::PARAM_INT);
    $req->bindParam(":login",$login);
    $req->bindParam(":password",$password);
    $req->execute();
    return json_encode('ok');
}

function deleteUtilisateur($id){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("DELETE FROM utilisateur WHERE id=:id");
    $req->bindParam(":id",$id);
    $req->execute();
    return json_encode('ok');
}
