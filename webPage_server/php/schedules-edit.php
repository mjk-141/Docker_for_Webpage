<?php
include ('database.php');

if (isset($_POST['id'])) {
    $task_work = $_POST['work'];
    $task_timework = $_POST['timework'];
    $task_explanation = $_POST['explanation'];
    $id = $_POST['id'];
    $query = "UPDATE schedule_list SET work = '$task_work', timework = '$task_timework',explanation = '$task_explanation' WHERE id = '$id'";
    $result = mysqli_query($connection, $query);

    if (! $result) {
        die('Query Failed.');
    }
    echo "Task Update Successfully";
}
?>
