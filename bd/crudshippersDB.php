<?php
    include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto -> Conectar();
	//Es necesario para recibir parametro con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);
	//Recepción de los datos enviados mediante POST desde main.js
    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $ShipperID = (isset($_POST['ShipperID'])) ? $_POST['ShipperID'] : '';
    $CompanyName = (isset($_POST['CompanyName'])) ? $_POST['CompanyName'] : '';
    $Phone = (isset($_POST['Phone'])) ? $_POST['Phone'] : '';

    switch ($opcion){
		case 1: //Alta
			$consulta = "INSERT INTO shippers (CompanyName, Phone) VALUES ('$CompanyName', '$Phone')";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 2: //Modificar
			$consulta = "UPDATE shippers SET CompanyName='$CompanyName', Phone='$Phone' WHERE ShipperID = '$ShipperID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado->fetchAll(PDO::FETCH_ASSOC);
			break;
		case 3: //Borrar
			$consulta = "DELETE FROM shippers WHERE ShipperID = '$ShipperID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 4: //Listar
			$consulta = "SELECT ShipperID, CompanyName, Phone FROM shippers";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado -> fetchAll(PDO::FETCH_ASSOC);
			break;
	}
	//Envia el array final en formato JSON a JS.
	print json_encode ($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;
?>