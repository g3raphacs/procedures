<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

echo deleteCategorie($_POST['id']);