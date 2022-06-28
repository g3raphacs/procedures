<?php

require_once "../modele/articleDB.php";
require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/categorie.php";

$getArticleByCategorie = json_decode($_POST['categorie'], true);

if (categorieExists($getArticleByCategorie['categorie'])){
    echo json_encode(getArticleByCategorie($getArticleByCategorie['categorie']));
} else {
    echo json_encode(getAllArticle());
}