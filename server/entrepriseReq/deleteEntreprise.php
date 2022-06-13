<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$deleteEntreprise = json_decode($_POST['id'], true);

echo deleteEntreprise($deleteEntreprise['id']);