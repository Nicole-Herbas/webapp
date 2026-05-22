<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "apiweb";

$conexion = new mysqli(
    $host,
    $user,
    $password,
    $database
);

// verificar conexión
if ($conexion->connect_error) {

    die(
        json_encode([
            "error" => "Error de conexión"
        ])
    );
}

// UTF8
$conexion->set_charset("utf8");