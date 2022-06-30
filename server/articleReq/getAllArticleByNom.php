<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";
require_once "../fonction/article.php";

$getAllArticleByNom = json_decode($_POST['nom'],true);

$nom = '%%';
if(isset($_POST['nom'])){
    $nom = '%'.$_POST['nom'].'%';
    echo $nom;
}

echo json_encode(getAllArticleByNom($nom));