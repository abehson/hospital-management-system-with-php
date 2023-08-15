<?php

include 'databaseConnection.php';

if (isset($_POST['submit'])) {
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$age = $_POST['age'];
	$nationalId = $_POST['nationalID'];
	$gender = $_POST['gender'];
	$phoneNumber = $_POST['phoneNumber'];
	$email = $_POST['email'];
	$dob = $_POST['dob'];
	$city = $_POST['city'];
	$village = $_POST['village'];
	$nationality = $_POST['nationality'];
	$maritalStatus = $_POST['maritalStatus'];
	$bloodGroup = $_POST['bloodGroup'];
	$genotype = $_POST['genotype'];
	$detail = $_POST['detail'];
    	$target_dir = "../uploads/";
    	$target_file = $target_dir . basename($_FILES["profileImages"]["name"]);
    	move_uploaded_file($_FILES["profileImages"]["tmp_name"], $target_file);
}	

$sql = "INSERT INTO patients (firstName, lastName, age, nationalID, gender, phoneNumber, email, dob, city, village, nationality, maritalStatus, bloodGroup, genotype, detail, profileImages) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)" ;

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt,"ssssssssssssssss",$firstName, $lastName, $age, $nationalId, $gender, $phoneNumber, $email, $dob, $city, $village, $nationality, $maritalStatus, $bloodGroup, $genotype, $detail, $target_file);

if (mysqli_stmt_execute($stmt)) {
    echo "Patient Details Registered successfully!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_stmt_close($stmt);
mysqli_close($conn);

?>
