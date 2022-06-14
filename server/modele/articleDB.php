<?php
require_once "connexionBDD.php";

function getAllArticle() : array {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article ORDER BY nom ASC");
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function getArticleById(int $id) : array{
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article WHERE id=:id");
    $req->bindParam(":id",$id,PDO::PARAM_INT);
    $req->execute();
    return $req->fetch(PDO::FETCH_ASSOC);
}

function getArticleByCategorie(int $categorie) : array {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article WHERE categorie=:categorie ORDER BY nom ASC");
    $req -> bindParam(":categorie",$categorie);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function addArticle($nom, $texte, $categorie){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO article VALUES (NULL, :nom, :texte, :categorie)");
    $req->bindParam(":nom",$nom);
    $req->bindParam(":texte",$texte);
    $req->bindParam(":categorie",$categorie,PDO::PARAM_INT);
    $req->execute();
    return json_encode('ok');
}

function updateArticle($id, $nom, $texte, $categorie){
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("UPDATE article SET nom=:nom, texte=:texte, categorie=:categorie WHERE id=:id");
    $requete->bindParam(":id",$id,PDO::PARAM_INT);
    $requete->bindParam(":nom",$nom);
    $requete->bindParam(":texte",$texte);
    $requete->bindParam(":categorie",$categorie,PDO::PARAM_INT);
    $requete->execute();
    return json_encode('ok');
}

function deleteArticle($id) {
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("DELETE FROM article WHERE id=:id");
    $requete->bindParam(":id",$id, PDO::PARAM_INT);
    $requete->execute();
    return json_encode('ok');
}

function findArticle($research) {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article WHERE nom LIKE :research OR texte LIKE :research ORDER BY nom ASC");
    $research = "%".$research."%";
    $req->bindParam(":research",$research);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}