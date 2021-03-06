<?php
require_once "connexionBDD.php";

function getAllCategorie() : array {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM categorie ORDER BY nom ASC");
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function getCategorieById($id) {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM categorie WHERE id=:id");
    $req->bindParam(":id",$id, PDO::PARAM_INT);
    $req->execute();
    return $req->fetch(PDO::FETCH_ASSOC);
}

function getCategorieByEntreprise($entreprise) : array {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM categorie WHERE entreprise=:entreprise ORDER BY nom ASC");
    $req->bindParam(":entreprise",$entreprise, PDO::PARAM_INT);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function addCategorie($nom, $entreprise) {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO categorie VALUES (NULL, :nom, :entreprise)");
    $req->bindParam(":nom", $nom, PDO::PARAM_STR);
    $req->bindParam("entreprise", $entreprise, PDO::PARAM_INT);
    $req->execute();
    return json_encode(['message' => 'catégorie ajouté', 'erreur' => false]);
}

function updateCategorie($id, $nom, $entreprise){
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("UPDATE categorie SET id=:id, nom=:nom, entreprise=:entreprise WHERE id=:id");
    $requete->bindParam(":id", $id, PDO::PARAM_INT);
    $requete->bindParam(":nom", $nom, PDO::PARAM_STR);
    $requete->bindParam(":entreprise", $entreprise, PDO::PARAM_INT);
    $requete->execute();
    return json_encode(['message' => 'catégorie modifié', 'erreur' => false]);
}

function deleteCategorie($id) {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("DELETE FROM categorie WHERE id=:id");
    $req->bindParam(":id",$id, PDO::PARAM_INT);
    $req->execute();
    return json_encode(['message' => 'catégorie supprimer', 'erreur' => false]);
}
