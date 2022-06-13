<?php

require_once "../modele/entrepriseDB.php";
require_once "../jwt/auth.php";

echo  updateEntreprise($_POST['id'], $_POST['nom']);