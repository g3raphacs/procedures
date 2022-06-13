<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$addEntreprise = json_decode($_POST['addEntreprise'], true );

echo addEntreprise($addEntreprise['nom']);

