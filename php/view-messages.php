<?php
session_start();
$accesscode = $_SESSION['accesscode'];
if($accesscode == true){
    echo "WELCOME ADMIN";
}else{
    header("Location: login.php"); 
}
include ('dbconnect.php');
$conn = connection();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta name="description" content="Personal Portfolio">
    <meta name="author" content="Ramilo Esquierra">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto&display=swap"
        rel="stylesheet">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid text-center">
        <p > </p>
        <div>
            <h3>Messages </h3>
            <a href="logout.php">Log Out</a>
            <div class="w-100">
                 <table>
                    <?php
                        $query = "SELECT * from messages ORDER BY ID DESC";
                        $result = mysqli_query($conn,$query);

                        if($result){
                            while($row = mysqli_fetch_assoc($result)){
                              echo "<div class='col message-container'>";
                              echo "<p class='message'><span>From : $row[Name]</br></span> $row[Date]  $row[Time] </p>";
                              echo "<div class='message-detail'>";
                              echo   "<p>Contact : $row[Contact]</p>";
                              echo   "<p>Message : <br><br>$row[Message]";
                              echo   "</p>";
                              echo "</div>";
                            echo "</div>";
                            }
                            mysqli_free_result($result);
                        }
                        else{
                            echo "Failed Getting Data";
                        }
                        ?> 
                </table>
            </div>
        </div>
    </div>


    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html> 
