<?php

require_once "../modele/entrepriseDB.php";
require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/entreprise.php";

$getAllArticleByEntreprise = json_decode($_POST['entreprise'], true);

if (entrepriseExists($getAllArticleByEntreprise['entreprise'])){
    echo json_encode(getAllArticleByEntreprise($getAllArticleByEntreprise['entreprise']));
} else {
    echo json_encode(['message' => 'entreprise non existante', 'erreur' => true]);
}
