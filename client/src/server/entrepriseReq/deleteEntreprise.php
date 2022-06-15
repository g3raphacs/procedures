<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

echo deleteEntreprise($_POST['id']);