<?php
include ('database.php');

$search = $_POST['search'];
if (! empty($search)) {
    $query = "SELECT * FROM Certificate WHERE name LIKE '$search%'";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Query Error' . mysqli_error($connection));
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
}

?>
