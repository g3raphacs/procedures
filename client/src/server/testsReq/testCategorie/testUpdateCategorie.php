<?php

require_once "modele/categorieDB.php";

$id = readline("Saisir l'id de la catégorie à modifier : ");
$nom = readline("Saisir le nouveau nom de la catégorie : ");

updateCategorie($id, $nom);
