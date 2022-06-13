<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$deleteCategorie = json_decode($_POST['id'], true);

echo deleteCategorie($deleteCategorie['id']);