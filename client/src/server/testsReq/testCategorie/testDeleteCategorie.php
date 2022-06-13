<?php

require_once "modele/categorieDB.php";

$id = readline("Saisir un id de categorie a supprimer : ");

deleteCategorie($id);

print_r(getAllCategorie());
