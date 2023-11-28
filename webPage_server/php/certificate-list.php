<?php
include ('database.php');

$query = "SELECT * from certificate_list";
$result = mysqli_query($connection, $query);
if (!$result) {
    die('Query Failed' . mysqli_error($connection));
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'certificate' => $row['certificate'],
        'description' => $row['description'],
        'date' => $row['date'],
        'id' => $row['id']
    );
}
$jsonstring = json_encode($json);
echo $jsonstring;
?>
