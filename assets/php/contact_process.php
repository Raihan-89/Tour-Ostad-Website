<?php
// Step 1: Connect to the database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "Tour_Ostad"; // replace with your actual database name

$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 2: Get data from the form
$name = $_POST['name'];
$phone = $_POST['phone'];
$support_detail = $_POST['support_detail'];
$details = $_POST['details'];

// Step 3: Insert data into the table
$sql = "INSERT INTO contact (name, phone, support_detail, details) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $phone, $support_detail, $details);

if ($stmt->execute()) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
