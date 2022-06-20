<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$addCategorie = json_decode($_POST['addCategorie'], true);

$categories = getAllCategorie();

foreach ($categories as $categorie){
    if(str_replace(' ', '', strtolower($categorie['nom'])) === str_replace(' ', '', strtolower($addCategorie['nom'])) && $categorie['entreprise']==$addCategorie['entreprise']){
        echo json_encode(['message' => 'nom de catégorie déjà utilisé', 'erreur' => true]);
        exit;
    }
}

echo addCategorie(ucfirst($addCategorie['nom']),$addCategorie['entreprise']);
