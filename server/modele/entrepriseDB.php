<?php

require_once "connexionBDD.php";

function getAllEntreprise() : array {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM entreprise ORDER BY nom_entreprise ASC");
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function getEntrepriseById(int $id) : array{
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM entreprise WHERE id=:id");
    $req->bindParam(":id", $id, PDO::PARAM_INT);
    $req->execute();
    return $req->fetch(PDO::FETCH_ASSOC);
}

function addEntreprise($nom){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO entreprise VALUES (NULL, :nom)");
    $req->bindParam(":nom", $nom, PDO::PARAM_STR);
    $req->execute();
    return json_encode('ok');
}

function updateEntreprise($id, $nom){
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("UPDATE entreprise SET nom_entreprise=:nom WHERE id=:id");
    $requete->bindParam(":id", $id, PDO::PARAM_INT);
    $requete->bindParam(":nom", $nom, PDO::PARAM_STR);
    $requete->execute();
    return json_encode('ok');
}

function deleteEntreprise($id) {
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("DELETE FROM entreprise WHERE id=:id");
    $requete->bindParam(":id",$id ,PDO::PARAM_INT);
    $requete->execute();
    return json_encode('ok');
}