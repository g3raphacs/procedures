<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$getArticleByCategorie = json_decode($_POST['categorie'], true);

echo json_encode(getArticleByCategorie($getArticleByCategorie['categorie']));
