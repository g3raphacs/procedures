<?php

$token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NTQ2MTUxNDIsImV4cCI6MTY1NDcwMTU0Mn0.9I2NXYiST1ILs6xZg2CQ_92HYc94rVI1SstFyyJ15To';

require_once "../includes/config.php";
require_once "../../classes/JWT.php";

$jwt = new JWT();
var_dump($jwt -> getHeader($token));