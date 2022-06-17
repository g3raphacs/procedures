<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/entreprise.php";

$getEntrepriseById = json_decode($_POST['id'],true);

if (entrepriseExists($getEntrepriseById['id'])){
    echo json_encode(getEntrepriseById($getEntrepriseById['id']));
} else {
    echo json_encode(['message' => 'entreprise non existante', 'erreur' => true]);
}
