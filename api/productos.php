<?php

// ==========================================
// HEADERS
// ==========================================

// permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");

// tipo de contenido JSON
header("Content-Type: application/json");

// métodos permitidos
header(
    "Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"
);

// headers permitidos
header(
    "Access-Control-Allow-Headers: Content-Type"
);


// responder preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}


// conexión BD
require_once "conexion.php";


// ==========================================
// OBTENER MÉTODO HTTP
// ==========================================

$method = $_SERVER['REQUEST_METHOD'];


// ==========================================
// GET
// ==========================================

if ($method == "GET") {

    // obtener uno
    if (isset($_GET['id'])) {

        $id = $_GET['id'];

        $sql = "SELECT * FROM productos WHERE id = ?";

        $stmt = $conexion->prepare($sql);

        $stmt->bind_param("i", $id);

        $stmt->execute();

        $resultado = $stmt->get_result();

        $producto = $resultado->fetch_assoc();

        echo json_encode($producto);

    } else {

        // listar todos
        $sql = "SELECT * FROM productos";

        $resultado = $conexion->query($sql);

        $productos = [];

        while ($fila = $resultado->fetch_assoc()) {

            $productos[] = $fila;
        }

        echo json_encode($productos);
    }
}


// ==========================================
// POST
// ==========================================

if ($method == "POST") {

    // obtener JSON enviado
    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $nombre = $data['nombre'];
    $precio = $data['precio'];
    $descripcion = $data['descripcion'];

    $sql = "
        INSERT INTO productos
        (nombre, precio, descripcion)
        VALUES (?, ?, ?)
    ";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "sds",
        $nombre,
        $precio,
        $descripcion
    );

    $stmt->execute();

    echo json_encode([
        "mensaje" => "Producto registrado"
    ]);
}


// ==========================================
// PUT
// ==========================================

if ($method == "PUT") {

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    $id = $data['id'];
    $nombre = $data['nombre'];
    $precio = $data['precio'];
    $descripcion = $data['descripcion'];

    $sql = "
        UPDATE productos
        SET
            nombre = ?,
            precio = ?,
            descripcion = ?
        WHERE id = ?
    ";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "sdsi",
        $nombre,
        $precio,
        $descripcion,
        $id
    );

    $stmt->execute();

    echo json_encode([
        "mensaje" => "Producto actualizado"
    ]);
}


// ==========================================
// DELETE
// ==========================================

if ($method == "DELETE") {

    // obtener id desde URL
    parse_str(
        $_SERVER['QUERY_STRING'],
        $params
    );

    $id = $params['id'];

    $sql = "DELETE FROM productos WHERE id = ?";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param("i", $id);

    $stmt->execute();

    echo json_encode([
        "mensaje" => "Producto eliminado"
    ]);
}