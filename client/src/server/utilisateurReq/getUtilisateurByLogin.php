<?php

require_once "../modele/utilisateurDB.php";

echo json_encode(getUtilisateurByLogin($_POST['login']));