<?php

require_once "modele/categorieDB.php";

$id_categorie = readline("Saisir un id de catégorie : ");
var_dump(getCategorieById($id_categorie));
