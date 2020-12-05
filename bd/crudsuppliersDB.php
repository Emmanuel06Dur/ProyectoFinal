<?php
    include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto -> Conectar();
	//Es necesario para recibir parametro con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);
	//Recepción de los datos enviados mediante POST desde main.js
    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $SupplierID = (isset($_POST['SupplierID'])) ? $_POST['SupplierID'] : '';
    $CompanyName = (isset($_POST['CompanyName'])) ? $_POST['CompanyName'] : '';
    $ContactName = (isset($_POST['ContactName'])) ? $_POST['ContactName'] : '';
    $ContactTitle = (isset($_POST['ContactTitle'])) ? $_POST['ContactTitle'] : '';
    $Address = (isset($_POST['Address'])) ? $_POST['Address'] : '';
    $City = (isset($_POST['City'])) ? $_POST['City'] : '';
    $Region = (isset($_POST['Region'])) ? $_POST['Region'] : '';
    $PostalCode = (isset($_POST['PostalCode'])) ? $_POST['PostalCode'] : '';
    $Country = (isset($_POST['Country'])) ? $_POST['Country'] : '';
    $Phone = (isset($_POST['Phone'])) ? $_POST['Phone'] : '';
    $Fax = (isset($_POST['Fax'])) ? $_POST['Fax'] : '';
    $HomePage = (isset($_POST['HomePage'])) ? $_POST['HomePage'] : '';
    switch ($opcion){
		case 1: //Alta
			$consulta = "INSERT INTO suppliers (CompanyName, ContactName, ContactTitle, Ubication, City, Region, PostalCode, Country, Phone, Fax, HomePage) VALUES ('$CompanyName', '$ContactName', '$ContactTitle', '$Address', '$City', '$Region', '$PostalCode', '$Country', '$Phone', '$Fax', '$HomePage') ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 2: //Modificar
			$consulta = "UPDATE suppliers SET CompanyName = '$CompanyName', ContactName='$ContactName', ContactTitle='$ContactTitle', Ubication='$Address', City='$City', Region='$Region', PostalCode='$PostalCode', Country='$Country', Phone='$Phone', Fax='$Fax', HomePage='$HomePage' WHERE SupplierID = '$SupplierID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado->fetchAll(PDO::FETCH_ASSOC);
			break;
		case 3: //Borrar
			$consulta = "DELETE FROM suppliers WHERE SupplierID = '$SupplierID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 4: //Listar
			$consulta = "SELECT SupplierID, CompanyName, ContactName, ContactTitle, Ubication, City, Region, PostalCode, Country, Phone, Fax, HomePage FROM suppliers";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado -> fetchAll(PDO::FETCH_ASSOC);
			break;
	}
	//Envia el array final en formato JSON a JS.
	print json_encode ($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;
?>