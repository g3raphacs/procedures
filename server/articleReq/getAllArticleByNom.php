<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$getArticleByNom = json_decode($_POST['nom'], true);

$nom = '%%';
if(isset($_POST['nom'])){
    $nom='%'.$_POST['nom'].'%';
}

echo json_encode(getArticleByNom($getArticleByNom[$nom]));