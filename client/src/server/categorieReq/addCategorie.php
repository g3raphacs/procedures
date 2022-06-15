<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

echo addCategorie($_POST['nom'],$_POST['entreprise']);
