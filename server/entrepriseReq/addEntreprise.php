<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$addEntrpeirse = json_decode($_POST['nom'], true );

echo addEntreprise($addEntrpeirse['nom']);
