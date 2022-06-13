<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$getEntrepriseById = json_decode($_POST['id'],true);

echo json_encode(getEntrepriseById($getEntrepriseById['id']));