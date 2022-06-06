<?php
//connection details
$servername = "brighton";
$username = "cg731_wedding";
$password = "ChadKezWedding"; 
$db="cg731_portfolio";     

//connection query
$mysqli = new mysqli($servername, $username,$password,$db);

// check connection 
if ($mysqli->connect_errno) {
    printf("Connect failed why oh why: %s\n", $mysqli->connect_error);
    exit();
}
?>