<?php
include ('database.php');

if (isset($_POST['work'])) {
    # echo $_POST['name'] . ', ' . $_POST['description'];
    $task_work = $_POST['work'];
    $task_date = $_POST['timework'];
    $task_explanation = $_POST['explanation'];
    $query = "INSERT into schedule_list(work, timework, explanation) VALUES ('$task_work','$task_date','$task_explanation')";
    $result = mysqli_query($connection, $query);

    if (! $result) {
        die('Query Failed.');
    }

    echo "Task Added Successfully";
}

?>
