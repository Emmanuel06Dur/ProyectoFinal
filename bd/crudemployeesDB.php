<?php
    include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto -> Conectar();
	//Es necesario para recibir parametro con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);
	//Recepción de los datos enviados mediante POST desde main.js
    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $EmployeeID = (isset($_POST['EmployeeID'])) ? $_POST['EmployeeID'] : '';
    $LastName = (isset($_POST['LastName'])) ? $_POST['LastName'] : '';
    $FirstName = (isset($_POST['FirstName'])) ? $_POST['FirstName'] : '';
    $Usuario = (isset($_POST['Usuario'])) ? $_POST['Usuario'] : '';
    $Password = (isset($_POST['Password'])) ? $_POST['Password'] : '';
    $Title = (isset($_POST['Title'])) ? $_POST['Title'] : '';
    $TitleOfCourtesy = (isset($_POST['TitleOfCourtesy'])) ? $_POST['TitleOfCourtesy'] : '';
    $BirthDate = (isset($_POST['BirthDate'])) ? $_POST['BirthDate'] : '';
    $HireDate = (isset($_POST['HireDate'])) ? $_POST['HireDate'] : '';
    $Ubications = (isset($_POST['Ubications'])) ? $_POST['Ubications'] : '';
    $City = (isset($_POST['City'])) ? $_POST['City'] : '';
    $Region = (isset($_POST['Region'])) ? $_POST['Region'] : '';
    $PostalCode = (isset($_POST['PostalCode'])) ? $_POST['PostalCode'] : '';
    $Country = (isset($_POST['Country'])) ? $_POST['Country'] : '';
    $HomePhone = (isset($_POST['HomePhone'])) ? $_POST['HomePhone'] : '';
    $Extension = (isset($_POST['Extension'])) ? $_POST['Extension'] : '';
    $Photo = (isset($_FILES['Photo']['tmp_name'])) ? $_FILES['Photo']['tmp_name'] : '';
    //$Photo = $_FILES['Photo']['name'];
    $Notes = (isset($_POST['Notes'])) ? $_POST['Notes'] : '';
    $ReportsTo = (isset($_POST['ReportsTo'])) ? $_POST['ReportsTo'] : '';
    $PhotoPath = (isset($_POST['PhotoPath'])) ? $_POST['PhotoPath'] : '';

    $contra=md5($Password);
    /*$target_dir="img/";
    $target_file=$target_dir.basename($Photo);
    move_uploaded_file($_FILES['Photo']['tmp_name'], $target_file);
    $Photo=", foto='".$_FILES['Photo']['name']."'";*/
    switch ($opcion){
		case 1: //Alta
			$consulta = "INSERT INTO employees (LastName, FirstName, Usuario, Password, Title, TitleOfCourtesy, BirthDate, HireDate, Ubications, City, Region, PostalCode, Country, HomePhone, Extension, Photo, Notes, ReportsTo, PhotoPath) VALUES ('$LastName', '$FirstName', '$Usuario', '$contra', '$Title', '$TitleOfCourtesy', '$BirthDate', '$HireDate', '$Ubications', '$City', '$Region', '$PostalCode', '$Country', '$HomePhone', '$Extension', '$Photo', '$Notes', '$ReportsTo', '$PhotoPath') ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 2: //Modificar
			$consulta = "UPDATE employees SET LastName = '$LastName', FirstName='$FirstName', Usuario='$Usuario', Password='$contra', Title='$Title', TitleOfCourtesy='$TitleOfCourtesy', BirthDate='$BirthDate', HireDate='$HireDate', Ubications='$Ubications', City='$City', Region='$Region', PostalCode='$PostalCode', Country='$Country', HomePhone='$HomePhone', Extension='$Extension', Photo='$Photo', Notes='$Notes', ReportsTo='$ReportsTo', PhotoPath='$PhotoPath' WHERE EmployeeID = '$EmployeeID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado->fetchAll(PDO::FETCH_ASSOC);
			break;
		case 3: //Borrar
			$consulta = "DELETE FROM employees WHERE EmployeeID = '$EmployeeID' ";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
		case 4: //Listar
			$consulta = "SELECT * FROM employees";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			$data = $resultado -> fetchAll(PDO::FETCH_ASSOC);
			break;
	}
	//Envia el array final en formato JSON a JS.
	print json_encode ($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;
?>