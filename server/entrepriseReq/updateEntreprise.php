<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/entreprise.php";

$updateEntreprise = json_decode($_POST['updateEntreprise'], true);

$entreprises = getAllEntreprise();

if (entrepriseExists($updateEntreprise['id'])){
    foreach ($entreprises as $entreprise){
        if(str_replace(' ', '', strtolower($entreprise['nom_entreprise']))===str_replace(' ', '', strtolower($updateEntreprise['nom'])) && $entreprise['id']!=$updateEntreprise['id']){
            echo json_encode(['message' => 'nom entreprise déjà utilise', 'erreur' => true]);
            exit;
        }
    }
    echo  updateEntreprise($updateEntreprise['id'], ucfirst($updateEntreprise['nom']));
} else {
    echo json_encode(['message' => 'entreprise introuvable', 'erreur' => true]);
}

