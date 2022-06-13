<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$getArticleById = json_decode($_POST['id'],true);

echo json_encode(getArticleById($getArticleById['id']));