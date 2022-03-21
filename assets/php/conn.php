<?php

function connect()
{
  $user = "gina";
  $pass = "";
  $server = "localhost";
  $db = "dse_consola";

  $con = new mysqli($server, $user, $pass, $db);
  if ($con->connect_errno) {
    die("Fallo" . $con->connect_errno);
  }
  return $con;
}
