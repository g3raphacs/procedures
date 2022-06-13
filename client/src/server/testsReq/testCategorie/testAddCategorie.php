<?php

require_once "modele/categorieDB.php";

$categorie = readline("Saisir une nouvelle catégorie : ");
addCategorie($categorie);
print_r(getAllCategorie());
