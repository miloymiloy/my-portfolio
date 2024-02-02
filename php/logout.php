<?php
session_start();
unset($_SESSION['accesscode']);
header("Location: login.php"); 
?>