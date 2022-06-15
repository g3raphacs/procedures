<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$updateArticle = json_decode($_POST['updateArticle'],true);

echo updateArticle($updateArticle['id'],$updateArticle['nom'],$updateArticle['texte'],$updateArticle['categorie'], $updateArticle['favori']);