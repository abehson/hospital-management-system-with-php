<?php
session_start();

if (!isset($_SESSION["email"])) {
    header("Location: login.php"); 
    exit();
}

$email = $_SESSION["email"];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome, <?php echo $email; ?>!</h2>

</body>
</html>

