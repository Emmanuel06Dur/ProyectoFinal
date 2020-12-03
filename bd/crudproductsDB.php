<?php
    include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto -> Conectar();
	//Es necesario para recibir parametro con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);
	//Recepción de los datos enviados mediante POST desde main.js
    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $ProductID = (isset($_POST['ProductID'])) ? $_POST['ProductID'] : '';
    $ProductName = (isset($_POST['ProductName'])) ? $_POST['ProductName'] : '';
    $SupplierID = (isset($_POST['SupplierID'])) ? $_POST['SupplierID'] : '';
    $CategoryID = (isset($_POST['CategoryID'])) ? $_POST['CategoryID'] : '';
    $QuantityPerUnit = (isset($_POST['QuantityPerUnit'])) ? $_POST['QuantityPerUnit'] : '';
    $UnitPrice = (isset($_POST['UnitPrice'])) ? $_POST['UnitPrice'] : '';
    $UnitsInStock = (isset($_POST['UnitsInStock'])) ? $_POST['UnitsInStock'] : '';
    $UnitsOnOrder = (isset($_POST['UnitsOnOrder'])) ? $_POST['UnitsOnOrder'] : '';
    $ReoderLevel = (isset($_POST['ReoderLevel'])) ? $_POST['ReoderLevel'] : '';
    $Discontinued = (isset($_POST['Phone'])) ? $_POST['Phone'] : '';
    switch ($opcion){
		case 1: //Alta
			$consulta = "INSERT INTO tablename () VALUES () ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 2: //Modificar
			$consulta = "UPDATE tablename SET nombre = '' WHERE id = '$ProductID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado->fetchAll(PDO::FETCH_ASSOC);
			break;
		case 3: //Borrar
			$consulta = "DELETE FROM tablename WHERE id = '$ProductID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 4: //Listar
			$consulta = "SELECT ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReoderLevel, Discontinued FROM products";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado -> fetchAll(PDO::FETCH_ASSOC);
			break;
	}
	//Envia el array final en formato JSON a JS.
	print json_encode ($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;
?>