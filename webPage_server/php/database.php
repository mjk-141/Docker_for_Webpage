<?php
//header("Access-Control-Allow-Origin: *");
$mysql_host = "mySQL_for_WebPage";
$mysql_user = "manager";
$mysql_password = "123456";
$mysql_db = "mySQL_for_webpage";


$connection = mysqli_connect(
    $mysql_host, $mysql_user, $mysql_password, $mysql_db
);

?>
