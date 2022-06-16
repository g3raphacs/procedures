<?php

function entrepriseExists($idEntreprise){
    $entreprises = getAllEntreprise();
    foreach ($entreprises as $entreprise){
        if ($entreprise['id']==$idEntreprise){
            return true;
        }
    }
    return false;
}