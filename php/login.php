<?php
session_start();

include 'databaseConnection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT email, password FROM admin WHERE email = '" . mysqli_real_escape_string($conn, $email) . "'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if ($row) {
        if (password_verify($password, $row["password"])) {
	    $_SESSION["email"] = $email;
            header("Location: dashboard.php"); 
        } else {
            echo "Invalid password Sorry!";
        }
    } else {
        echo "Invalid email";
    }

    mysqli_free_result($result);
}

?>



