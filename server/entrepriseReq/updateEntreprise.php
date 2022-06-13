<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

$update = json_decode($_POST['update'], true);

echo  updateEntreprise($update['id'], $update['nom']);