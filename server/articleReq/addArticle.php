<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$addArticle = json_decode($_POST['addArticle'], true);

$articles = getAllArticle();

foreach ($articles as $article){
    if($article['nom']===$addArticle['nom']){
        echo json_encode(['message' => 'nom de procédure déja utilisé']);
        exit;
    }
}

echo addArticle($addArticle['nom'], $addArticle['texte'], $addArticle['categorie'], $addArticle['favori']);