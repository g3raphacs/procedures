<?php

function articleExists($idArticle){
    $articles = getAllArticle();
    foreach ($articles as $article){
        if ($article['id']==$idArticle){
            return true;
        }
    }
    return false;
}