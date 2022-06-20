<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$addEntreprise = json_decode($_POST['addEntreprise'], true );

$entreprises = getAllEntreprise();

foreach ($entreprises as $entreprise){
    if(str_replace(' ', '', strtolower($entreprise['nom_entreprise'])) === str_replace(' ', '', strtolower($addEntreprise['nom']))){
        echo json_encode(['message' => 'nom entreprise déjà utilisé', 'erreur' => true]);
        exit;
    }
}

echo addEntreprise(ucfirst($addEntreprise['nom']));

