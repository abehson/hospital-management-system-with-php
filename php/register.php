<?php

include 'databaseConnection.php';

if (isset($_POST['submit'])) {
	$firstname = $_POST['firstName'];
	$lastname = $_POST['lastName'];
	$email = $_POST['email'];
	$plainPassword = $_POST['password'];
	$confirmedPassword = $_POST['confirmPassword'];
}

if ($plainPassword !== $confirmedPassword) {
	echo "Passwords do not match.";
	exit;
}

$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

$sql = "INSERT INTO admin (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ssss", $firstname, $lastname, $email, $hashedPassword);

if (mysqli_stmt_execute($stmt)) {
	require 'registrationSuccess.php';
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);

?>

