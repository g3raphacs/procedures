<?php

require_once "connexionBDD.php";

function getUtilisateurByLogin($login){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM utilisateur WHERE login=:login");
    $req->execute([
        ":login" => $login,
    ]);
    return $req->fetch(PDO::FETCH_ASSOC);
}

function addUtilisateur($login, $password){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO utilisateur VALUES (NULL, :login, :password)");
    $req->execute([
        ":login" => $login,
        ":password" => $password,
    ]);
    return json_encode('ok');
}

function updateUtilisateur($id, $login, $password){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("UPDATE utilisateur SET login=:login, password=:password WHERE id=:id");
    $req->execute([
        ":id" => $id,
        ":login" => $login,
        ":password" => $password,
    ]);
    return json_encode('ok');
}

function deleteUtilisateur($id){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("DELETE FROM utilisateur WHERE id=:id");
    $req->bindParam(":id",$id);
    $req->execute();
    return json_encode('ok');
}
