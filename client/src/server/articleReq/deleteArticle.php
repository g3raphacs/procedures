<?php

require_once "../modele/articleDB.php";
require_once "../jwt/auth.php";

echo deleteArticle($_POST['id']);
