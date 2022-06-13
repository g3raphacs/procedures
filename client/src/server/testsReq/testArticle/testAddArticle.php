<?php

require_once "modele/articleDB.php";

echo "Saisir le nom de la procedure : ";
$nom = readline();
$texte = readline("Saisir le corp de la procedure : ");
$id_categorie = readline("Saisir l'id de la catégorie : ");

addArticle($nom, $texte, $id_categorie);
print_r(getAllArticle());