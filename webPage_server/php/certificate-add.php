<?php
include ('database.php');

if (isset($_POST['certificate'])) {
    # echo $_POST['name'] . ', ' . $_POST['description'];
    $task_certificate = $_POST['certificate'];
    $task_date = $_POST['date'];
    $task_description = $_POST['description'];
    $query = "INSERT into certificate_list(certificate, date, description) VALUES ('$task_certificate','$task_date','$task_description')";
    $result = mysqli_query($connection, $query);

    if (! $result) {
        die('Query Failed.');
    }

    echo "Task Added Successfully";
}
?>
