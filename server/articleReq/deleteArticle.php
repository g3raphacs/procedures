<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/article.php";

$deleteArticle = json_decode($_POST['id'], true);

$articles = getAllArticle();

if (articleExists($deleteArticle['id'])){
    echo deleteArticle($deleteArticle['id']);
} else {
    echo json_encode(['message' => 'article introuvable']);
}

