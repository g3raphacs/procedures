<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

$findArticle = json_decode($_POST['research'],true);

echo json_encode(findArticle($findArticle['research']));
