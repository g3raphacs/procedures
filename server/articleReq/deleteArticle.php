<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$deleteArticle = json_decode($_POST['id'], true);

echo deleteArticle($deleteArticle['id']);
