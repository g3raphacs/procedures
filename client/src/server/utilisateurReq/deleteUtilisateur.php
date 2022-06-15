<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";

echo deleteUtilisateur($_POST['id']);