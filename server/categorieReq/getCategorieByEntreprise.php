<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$getCategorieByEntreprise = json_decode($_POST['entreprise'], true);

echo json_encode(getCategorieByEntreprise($getCategorieByEntreprise['entreprise']));