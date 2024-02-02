<?php
include_once 'dbconnect.php';
$conn=connection(); 
session_start();
$alert = '';
if (isset($_POST['submit'])) {  
    $key= $_POST['key'];  
    if(strlen($key) == 0){
        $alert = "No Input";
    }else{
        $sql="SELECT * FROM accesskey WHERE Key_Code='$key'";  
        $access = $conn->query($sql) or die ($conn->error);
        $row = $access->fetch_assoc();
        $num = $access->num_rows;
        if ($num == 1) {   
            header("Location: view-messages.php");  
            $_SESSION['accesscode']=$key;    
        }
        else{
            $alert = "Incorrect Access Key";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Login</title>
</head>
<body>
    
    <div class="container-fluid bg-light d-flex justify-content-center">
        <div class="row text-center h-100">
            <p></p>
            <form action="" method="POST">
                <div class="form-group">
                    <input type="text" name="key" placeholder="access key">
                </div>
                <div class="form-group">
                    <p><?php echo $alert ?></p>
                    <input class="form-control btn btn-primary" name="submit" type="submit" value="login">
                </div>
            </form>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>