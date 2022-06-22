<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/article.php";

$getArticleById = json_decode($_POST['id'],true);

if (articleExists($getArticleById['id'])){
    echo json_encode(getArticleById($getArticleById['id']));
} else {
    echo json_encode(['message' => 'article non existant', 'erreur' => true]);
}