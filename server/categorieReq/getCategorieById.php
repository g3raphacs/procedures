<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$getcategorieById = json_decode($_POST['id'], true);

echo json_encode(getCategorieById($getcategorieById['id']));
