<?php
$validUsername = "admin";
$validPassword = "password";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  if ($username === $validUsername && $password === $validPassword) {
    $response = array("success" => true);
    echo json_encode($response);
  } else {
    $response = array("success" => false);
    echo json_encode($response);
  }
}
?>
