<?php
include ('database.php');

if (isset($_POST['id'])) {
    $task_certificate = $_POST['certificate'];
    $task_date = $_POST['date'];
    $task_description = $_POST['description'];
    $id = $_POST['id'];
    $query = "UPDATE certificate_list SET certificate = '$task_certificate', date = '$task_date', description = '$task_certificate' WHERE id = '$id'";
    $result = mysqli_query($connection, $query);

    if (! $result) {
        die('Query Failed.');
    }
    echo "Task Update Successfully";
}
?>
