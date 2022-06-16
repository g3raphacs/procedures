<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/entreprise.php";

$updateEntreprise = json_decode($_POST['updateEntreprise'], true);

$entreprises = getAllEntreprise();

if (entrepriseExists($updateEntreprise['id'])){
    foreach ($entreprises as $entreprise){
        if(str_replace(' ', '', strtolower($entreprise['nom']))===str_replace(' ', '', strtolower($updateEntreprise['nom'])) && $entreprise['id']!=$updateEntreprise['id']){
            echo json_encode(['message' => "nom d'entreprise déjà utilise"]);
            exit;
        }
    }
    echo  updateEntreprise($updateEntreprise['id'], $updateEntreprise['nom']);
} else {
    echo json_encode(['message' => 'entreprise introuvable']);
}

