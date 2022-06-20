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
    $req -> bindParam(":categorie",$categorie, PDO::PARAM_INT);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function addArticle($nom, $texte, $categorie, $favori){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("INSERT INTO article VALUES (NULL, :nom, :texte, :categorie, :favori)");
    $req->bindParam(":nom",$nom, PDO::PARAM_STR);
    $req->bindParam(":texte",$texte, PDO::PARAM_STR);
    $req->bindParam(":categorie",$categorie,PDO::PARAM_INT);
    $req->bindParam(":favori", $favori, PDO::PARAM_INT);
    $req->execute();
    return json_encode(['message' => 'article ajouté', 'erreur' => false]);
}

function updateArticle($id, $nom, $texte, $categorie, $favori){
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("UPDATE article SET nom=:nom, texte=:texte, categorie=:categorie, favori=:favori WHERE id=:id");
    $requete->bindParam(":id",$id,PDO::PARAM_INT);
    $requete->bindParam(":nom",$nom, PDO::PARAM_STR);
    $requete->bindParam(":texte",$texte, PDO::PARAM_STR);
    $requete->bindParam(":categorie",$categorie,PDO::PARAM_INT);
    $requete->bindParam(":favori", $favori, PDO::PARAM_INT);
    $requete->execute();
    return json_encode(['message' => 'article modifié', 'erreur' => false]);
}

function deleteArticle($id) {
    $pdoConnexion = creerConnection();
    $requete = $pdoConnexion->prepare("DELETE FROM article WHERE id=:id");
    $requete->bindParam(":id",$id, PDO::PARAM_INT);
    $requete->execute();
    return json_encode(['message' => 'article supprimé', 'erreur' => false]);
}

function findArticle($research) {
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article WHERE nom LIKE :research OR texte LIKE :research ORDER BY nom ASC");
    $research = "%".$research."%";
    $req->bindParam(":research",$research, PDO::PARAM_STR);
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}

function getAllArticleFavorie(){
    $pdoConnexion = creerConnection();
    $req = $pdoConnexion->prepare("SELECT * FROM article ORDER BY favori DESC, nom ASC");
    $req->execute();
    return $req->fetchAll(PDO::FETCH_ASSOC);
}