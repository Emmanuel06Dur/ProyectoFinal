<?php
    include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto -> Conectar();
	//Es necesario para recibir parametro con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);
	//Recepción de los datos enviados mediante POST desde main.js
    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $OrderID = (isset($_POST['OrderID'])) ? $_POST['OrderID'] : '';
    $CustomerID = (isset($_POST['CustomerID'])) ? $_POST['CustomerID'] : '';
    $EmployeeID = (isset($_POST['EmployeeID'])) ? $_POST['EmployeeID'] : '';
    $OrderDate = (isset($_POST['OrderDate'])) ? $_POST['OrderDate'] : '';
    $RequiredDate = (isset($_POST['RequiredDate'])) ? $_POST['RequiredDate'] : '';
    $ShippedDate = (isset($_POST['ShippedDate'])) ? $_POST['ShippedDate'] : '';
    $ShipVia = (isset($_POST['ShipVia'])) ? $_POST['ShipVia'] : '';
    $Freight = (isset($_POST['Freight'])) ? $_POST['Freight'] : '';
    $ShipName = (isset($_POST['ShipName'])) ? $_POST['ShipName'] : '';
    $ShipAddress = (isset($_POST['ShipAddress'])) ? $_POST['ShipAddress'] : '';
    $ShipCity = (isset($_POST['ShipCity'])) ? $_POST['ShipCity'] : '';
    $ShipRegion = (isset($_POST['ShipRegion'])) ? $_POST['ShipRegion'] : '';
    $ShipPostalCode = (isset($_POST['ShipPostalCode'])) ? $_POST['ShipPostalCode'] : '';
    $ShipCountry = (isset($_POST['ShipCountry'])) ? $_POST['ShipCountry'] : '';
    switch ($opcion){
		case 1: //Alta
			$consulta = "INSERT INTO orders (CustomerID, EmployeeID, OrderDate, RequiredDate, ShippedDate, ShipVia, Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry) VALUES ('$CustomerID', '$EmployeeID', '$OrderDate', '$RequiredDate', '$ShippedDate', '$ShipVia', '$Freight', '$ShipName', '$ShipAddress', '$ShipCity', '$ShipRegion', '$ShipPostalCode', '$ShipCountry') ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 2: //Modificar
			$consulta = "UPDATE orders SET CustomerID='$CustomerID', EmployeeID='$EmployeeID', OrderDate='$OrderDate', RequiredDate='$RequiredDate', ShippedDate='$ShippedDate', ShipVia='$ShipVia', Freight='$Freight', ShipName='$ShipName', ShipAddress='$ShipAddress', ShipCity='$ShipCity', ShipRegion='$ShipRegion', ShipPostalCode='$ShipPostalCode', ShipCountry='$ShipCountry' WHERE OrderID='$OrderID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado->fetchAll(PDO::FETCH_ASSOC);
			break;
		case 3: //Borrar
			$consulta = "DELETE FROM orders WHERE OrderID='$OrderID'";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 4: //Listar
			$consulta = "SELECT OrderID, CustomerID, EmployeeID, OrderDate, RequiredDate, ShippedDate, ShipVia, Freight, ShipName, ShipAddress, ShipCity, ShipRegion, ShipPostalCode, ShipCountry FROM orders LIMIT 90";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado -> fetchAll(PDO::FETCH_ASSOC);
			break;
	}
	//Envia el array final en formato JSON a JS.
	print json_encode ($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;
?>