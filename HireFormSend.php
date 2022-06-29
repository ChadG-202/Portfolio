<?php
include_once"mysql.php";

$fullName = $_POST['fullName'];
$email = $_POST['email'];
$question = $_POST['question'];

if (is_null($fullName) || is_null($email) || is_null($question)){
    header('Location: index.html');
}

$DateAdded = date("y/m/d");
$sql=mysqli_query($mysqli, "insert into PortfolioHire(FullName, Email, Question, DateAdded) values('$fullName', '$email', '$question', '$DateAdded')");
header('Location: index.html');
?>

