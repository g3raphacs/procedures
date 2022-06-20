<?php

require_once "../modele/categorieDB.php";
require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/entreprise.php";

$getCategorieByEntreprise = json_decode($_POST['entreprise'], true);

$entreprises = getAllEntreprise();

if (entrepriseExists($getCategorieByEntreprise['entreprise'])){
    echo json_encode(getCategorieByEntreprise($getCategorieByEntreprise['entreprise']));
} else {
    echo json_encode(['message' => 'entreprise non existante', 'erreur' => true]);
}
