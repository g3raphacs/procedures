<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

echo json_encode(findArticle($_POST['research']));
