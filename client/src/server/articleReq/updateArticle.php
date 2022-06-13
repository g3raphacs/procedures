<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

echo updateArticle($_POST['id'],$_POST['nom'],$_POST['texte'],$_POST['categorie']);