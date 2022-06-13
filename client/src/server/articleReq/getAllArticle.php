<?php
header("Access-Control-Allow-Origin: *");

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

echo json_encode(getAllArticle());

