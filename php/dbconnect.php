<?php

function connection (){
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "miloydb";
   
    $conn = new mysqli ($dbhost,$dbuser,$dbpass,$db);
 if($conn->connect_error){
    echo $conn->connect_error;
 }
 else{
    return $conn;
 }

}
   
?>