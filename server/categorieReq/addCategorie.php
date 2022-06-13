<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

$addCategorie = json_decode($_POST['addCategorie'], true);

echo addCategorie($addCategorie['nom'],$addCategorie['entreprise']);
