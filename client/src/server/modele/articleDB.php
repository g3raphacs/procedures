<?php
header("Access-Control-Allow-Origin: *");
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
    $req->execute([
        ":id" => $id
    ]);
    return $req->fetch(PDO::FETCH_ASSOC);
}

function getArticleByCategorie($categorie) : array {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article WHERE categorie=:categorie ORDER BY nom ASC");
    $req -> bindParam(":categorie",$categorie);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function addArticle($nom, $texte, $categorie){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO article VALUES (NULL, :nom, :texte, :categorie)");
    $req->execute([
        ":nom" => $nom,
        ":texte" => $texte,
        ":categorie" => $categorie,
    ]);
    return json_encode('ok');
}

function updateArticle($id, $nom, $texte, $categorie){
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("UPDATE article SET nom=:nom, texte=:texte, categorie=:categorie WHERE id=:id");
    $requete->execute([
        ":id" => $id,
        ":nom" => $nom,
        ":texte" => $texte,
        ":categorie" => $categorie,
    ]);
    return json_encode('ok');
}

function deleteArticle($id) {
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("DELETE FROM article WHERE id=:id");
    $requete->bindParam(":id",$id);
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