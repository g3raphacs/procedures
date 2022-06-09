<?php

require_once "modele/articleDB.php";

$id = readline("Saisir l'id de l'article à modifier : ");
$nom = readline("Saisir le nouveau nom de l'article : ");
$texte = readline("Saisir le nouveau texte de l'article : ");
$categorie = readline("Saisir la nouvelle catégorie de l'article : ");

updateArticle($id, $nom, $texte, $categorie);