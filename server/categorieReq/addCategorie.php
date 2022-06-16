<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$addCategorie = json_decode($_POST['addCategorie'], true);

$categories = getAllCategorie();

foreach ($categories as $categorie){
    if($categorie['nom']===$addCategorie['nom']){
        echo json_encode(['message' => 'nom de catégorie déja utilisé']);
        exit;
    }
}

echo addCategorie($addCategorie['nom'],$addCategorie['entreprise']);
