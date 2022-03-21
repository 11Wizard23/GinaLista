<?php

require('conn.php');
$con = connect();

$query = "SELECT * FROM consola ORDER BY ID desc";
    $result = mysqli_query($con, $query);

    $json = array();
    while ($row = mysqli_fetch_array($result)) {
      $json[] = array(
        'ID' => $row['ID'],
        'DATO' => $row['DATO'],
        'FECHA' => $row['FECHA']
      );
    }
    $jsonResponse = array(
      'status' => 200,
      'ok' => true,
      'publicaciones' => $json
    );
    echo json_encode($jsonResponse);