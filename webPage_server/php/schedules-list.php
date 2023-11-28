<?php
include ('database.php');

$query = "SELECT * from schedule_list";
$result = mysqli_query($connection, $query);
if (!$result) {
    die('Query Failed' . mysqli_error($connection));
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'work' => $row['work'],
        'explanation' => $row['explanation'],
        'timework' => $row['timework'],
        'id' => $row['id']
    );
}
$jsonstring = json_encode($json);
echo $jsonstring;
?>
