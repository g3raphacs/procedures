<?php

require_once "modele/articleDB.php";
echo "Saisir l'id de la catégorie : ";
$id_categorie = readline();
$articleByCategorie = getArticleByCategorie($id_categorie);
print_r($articleByCategorie);


