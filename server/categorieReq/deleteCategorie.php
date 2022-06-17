<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/categorie.php";

$deleteCategorie = json_decode($_POST['id'], true);

$categories = getAllCategorie();

if (categorieExists($deleteCategorie['id'])){
    echo deleteCategorie($deleteCategorie['id']);
} else {
    echo json_encode(['message' => 'catégorie introuvable', 'erreur' => true]);
}
