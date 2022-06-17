<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/categorie.php";

$getcategorieById = json_decode($_POST['id'], true);

if (categorieExists($getcategorieById['id'])){
    echo json_encode(getCategorieById($getcategorieById['id']));
} else {
    echo json_encode(['message' => 'catégorie non existante', 'erreur' => true]);
}
