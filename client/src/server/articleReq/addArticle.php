<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

echo addArticle($_POST['nom'], $_POST['texte'], $_POST['categorie']);