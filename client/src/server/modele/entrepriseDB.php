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
    $req->execute([
        ":id" => $id
    ]);
    return $req->fetch(PDO::FETCH_ASSOC);
}

function addEntreprise($nom){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO entreprise VALUES (NULL, :nom)");
    $req->execute([
        ":nom" => $nom,
    ]);
    return json_encode('ok');
}

function updateEntreprise($id, $nom){
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("UPDATE entreprise SET nom_entreprise=:nom WHERE id=:id");
    $requete->execute([
        ":id" => $id,
        ":nom" => $nom,
    ]);
    return json_encode('ok');
}

function deleteEntreprise($id) {
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("DELETE FROM entreprise WHERE id=:id");
    $requete->bindParam(":id",$id);
    $requete->execute();
    return json_encode('ok');
}