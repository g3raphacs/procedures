<?php

require_once "../modele/categorieDB.php";
require_once "../jwt/auth.php";

echo json_encode(getAllCategorie());