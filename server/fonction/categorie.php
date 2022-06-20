<?php

function categorieExists($idCategorie){
    $categories = getAllCategorie();
    foreach ($categories as $categorie){
        if ($categorie['id']==$idCategorie){
            return true;
        }
    }
    return false;
}