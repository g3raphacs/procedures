<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/categorie.php";

$updateCategorie = json_decode($_POST['update'], true);

$categories = getAllCategorie();

if (categorieExists($updateCategorie['id'])){
    foreach ($categories as $categorie){
        if(str_replace(' ', '', strtolower($categorie['nom']))===str_replace(' ', '', strtolower($updateCategorie['nom'])) && $categorie['id']!=$updateCategorie['id'] && $categorie['entreprise']==$updateCategorie['entreprise']){
            echo json_encode(['message' => 'nom de categorie déjà utilisé dans cette entreprise', 'erreur' => true]);
            exit;
        }
    }
    echo updateCategorie($updateCategorie['id'], ucfirst($updateCategorie['nom']), $updateCategorie['entreprise']);
} else {
    echo json_encode(['message' => 'catégorie introuvable', 'erreur' => true]);
}
