<?php

require_once "modele/articleDB.php";
echo "Saisir l'id de l'article : ";
$id_article = readline();

$article = getArticleByCategorie($id_article);
print_r($article);