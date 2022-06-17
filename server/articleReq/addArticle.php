<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$addArticle = json_decode($_POST['addArticle'], true);

$articles = getAllArticle();

foreach ($articles as $article){
    if(str_replace(' ', '', strtolower($article['nom'])) === str_replace(' ', '', strtolower($addArticle['nom'])) && $article['categorie']==$addArticle['categorie']){
        echo json_encode(['message' => 'nom article déjà utilisé dans cette catégorie', 'erreur' => true]);
        exit;
    }
}

echo addArticle(ucfirst($addArticle['nom']), $addArticle['texte'], $addArticle['categorie'], $addArticle['favori']);