<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

echo updateCategorie($_POST['id'], $_POST['nom'], $_POST['entreprise']);
