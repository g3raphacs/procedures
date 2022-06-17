<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/article.php";

$updateArticle = json_decode($_POST['updateArticle'],true);

$articles = getAllArticle();

if (articleExists($updateArticle['id'])){
    foreach ($articles as $article){
        if(str_replace(' ', '', strtolower($article['nom']))===str_replace(' ', '', strtolower($updateArticle['nom'])) && $article['id']!=$updateArticle['id'] && $article['categorie']==$updateArticle['categorie']){
            echo json_encode(['message' => 'nom article déjà utilisé dans cette catégorie', 'erreur' => true]);
            exit;
        }
    }
    echo updateArticle($updateArticle['id'],ucfirst($updateArticle['nom']),$updateArticle['texte'],$updateArticle['categorie'], $updateArticle['favori']);
} else {
    echo json_encode(['message' => 'utilisateur introuvable', 'erreur' => true]);
}
