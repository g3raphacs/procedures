<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$updateCategorie = json_decode($_POST['update'], true);

echo updateCategorie($updateCategorie['id'], $updateCategorie['nom'], $updateCategorie['entreprise']);
