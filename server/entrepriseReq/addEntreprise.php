<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$addEntreprise = json_decode($_POST['addEntreprise'], true );

$entreprises = getAllEntreprise();

foreach ($entreprises as $entreprise){
    if($entreprise['nom_entreprise']===$addEntreprise['nom']){
        echo json_encode(['message' => "nom d'entreprise déja utilisé"]);
        exit;
    }
}

echo addEntreprise($addEntreprise['nom']);

