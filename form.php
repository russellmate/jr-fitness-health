<?php
    //declare variables
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $age = $_POST['age'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];

    //create connection to mysql
    $conn = new mysqli('localhost', 'root', "", 'jr_client_info');

    //check for connection errors
    if($conn->connect_error) {
        die("Error in DB connection: ".$conn->connect_errno.":".$conn->connect_error);
    }

    //select database
    $db = mysqli_select_db('jr_client_info', $connection);

    if(isset($_POST['first_name'])) {
        //insert query
        $insert = "insert into client_info(id, firstName, lastName, age, height, weight, email, mobile)values('','$firstName', '$lastName', '$age', '$height', '$weight', '$email', '$mobile')";

        if($conn->query($insert)) {
            echo 'Form submitted';
        } else {
            echo 'Error '.$conn->error;
        }
    }

    mysqli_close($connection);