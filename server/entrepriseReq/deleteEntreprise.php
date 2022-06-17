<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/entreprise.php";

$deleteEntreprise = json_decode($_POST['id'], true);

$Entreprises = getAllEntreprise();

if (entrepriseExists($deleteEntreprise['id'])){
    echo deleteEntreprise($deleteEntreprise['id']);
} else {
    echo json_encode(['message' => 'entreprise introuvable', 'erreur' => true]);
}