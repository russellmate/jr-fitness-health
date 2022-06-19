<?php
    $fisrtName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $description = $_POST['description'];

    // database connection
    $conn = new mysqli('localhost', 'root', '', 'jrclients');
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare();
    }
?>