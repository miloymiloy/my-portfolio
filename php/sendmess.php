<?php

//DB CONNECTION
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "miloydb";

//GET USER INPUT
$name = $_POST['name'];
$contact = $_POST['contact'];
$message = $_POST['message'];


//GET CURRENT TIME
date_default_timezone_set('Asia/Manila');
$time = date('h:i a');
// $date = date('F d, Y') . '\n' . $time;
$date = date('F d, Y');

$conn = new mysqli ($dbhost,$dbuser,$dbpass,$db);
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}
else{

if(strlen($name) >= 1 AND strlen($contact) >= 1 AND strlen($message) >= 1 ){
    $sql = "INSERT INTO messages (Name,Contact,Message,Date,Time) VALUES ('$name','$contact','$message','$date','$time')";
    if(mysqli_query($conn, $sql)){
        header("HTTP/1.1 204 NO CONTENT");
    }
    else{
        echo "connection error";
    }

}
else{
    echo "error";
}

}
?>