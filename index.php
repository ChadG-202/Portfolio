<?php
include_once"mysql.php";

$fullName = $_POST['fullName'];
$email = $_POST['email'];
$question = $_POST['question'];

$DateAdded = date("y/m/d");
$sql=mysqli_query($mysqli, "insert into PortfolioHire(FullName, Email, Question, DateAdded) values('$fullName', '$email', '$question', '$DateAdded')");
header('Location: index.php');
?>

