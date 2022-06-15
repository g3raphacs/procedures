<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$addArticle = json_decode($_POST['addArticle'], true);

echo addArticle($addArticle['nom'], $addArticle['texte'], $addArticle['categorie'], $addArticle['favori']);