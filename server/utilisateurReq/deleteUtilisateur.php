<?php

require_once "../modele/utilisateurDB.php";
require_once "../jwt/auth.php";



$deleteUtilisateur = json_decode($_POST['id'],true);

echo deleteUtilisateur($deleteUtilisateur['id']);