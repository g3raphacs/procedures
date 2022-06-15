<?php
// ------------ définir les éléments de connexion à la BDD ------------

const HOST = "host=192.168.1.206:3307";
const DATABASE = "bdc";
const USER = "activcomdev";
const PASSWORD = "Eurydice100403";

//const HOST = "host=localhost:8889";
//const DATABASE = "dbc";
//const USER = "root";
//const PASSWORD = "root";

// ------------ connexion à la BDD à l'aide PDO ------------
function creerConnection(){
    try {
        $pdoConnexion = new PDO("mysql:".HOST.";dbname=".DATABASE.";charset=utf8", USER, PASSWORD);
        // activation des erreurs
        $pdoConnexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdoConnexion;
    } catch (PDOException $error) {
        die("Error : ".$error->getMessage());
    }
}