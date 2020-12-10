<?php
	
	include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();

	//necesario para recibir parametros con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);

	// Recepción de los datos enviados mediante POST desde el main.js
	$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

    $CategoryID = (isset($_POST['CategoryID'])) ? $_POST['CategoryID'] : '';
    $CategoryName = (isset($_POST['CategoryName'])) ? $_POST['CategoryName'] : '';
    $Description = (isset($_POST['Description'])) ? $_POST['Description'] : '';
	switch($opcion){
		case 1://Alta o Insertamos nuevo registro
			$consulta = "INSERT INTO categories (CategoryName, Description) VALUES ('$CategoryName', '$Description')";
			$resultado = $conexion->prepare($consulta);
			$resultado->execute();
			break;

		case 2://Modificación
			$consulta = "UPDATE categories SET CategoryName='$CategoryName', Description='$Description' WHERE CategoryID = '$CategoryID' ";
			$resultado = $conexion->prepare($consulta);
			$resultado->execute();
			$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
			break;

		case 3://Borrar
			$consulta = "DELETE FROM categories WHERE CategoryID='$CategoryID' ";
			$resultado = $conexion->prepare($consulta);
			$resultado->execute();
			break;

		case 4://Listar
			$consulta = "SELECT * FROM categories";
			$resultado = $conexion->prepare($consulta);
			$resultado->execute();
			$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
			break;
	}

	print json_encode($data, JSON_UNESCAPED_UNICODE); //Enviar el array final en formato json a JS.
	$conexion = NULL;