<?php
    include_once "conexion.php";
	$objeto = new Conexion();
	$conexion = $objeto -> Conectar();
	//Es necesario para recibir parametro con Axios.
	$_POST = json_decode(file_get_contents("php://input"), true);
	//Recepción de los datos enviados mediante POST desde main.js
    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $fechainicial = (isset($_POST['fechainicial'])) ? $_POST['fechainicial'] : '';
    $fechafinal = (isset($_POST['fechafinal'])) ? $_POST['fechafinal'] : '';
    $categoria = (isset($_POST['categoria'])) ? $_POST['categoria'] : '';
    
    switch ($opcion){
		case 1: //Unica consulta para el reporte 2.
			$consulta = "SELECT p.productid, p.productname, p.unitprice, p.unitsinstock, c.CategoryName, (
                SELECT COUNT(*) FROM `order details` od JOIN orders o ON o.OrderID=od.OrderId WHERE p.ProductID=od.productID AND o.OrderDate BETWEEN '$fechainicial' AND '$fechafinal') Cantidad,(
                SELECT ROUND(sum(od.UnitPrice*od.Quantity-od.UnitPrice*od.Quantity*od.Discount),2) FROM `order details` od JOIN orders o ON o.OrderID=od.OrderID WHERE p.ProductID=od.ProductID AND o.OrderDate BETWEEN '$fechainicial' AND '$fechafinal) as Monto 
            FROM products p JOIN categories c ON p.CategoryID=c.CategoryID WHERE c.CategoryID='$categoria' ORDER BY cantidad desc";
			$resultado = $conexion -> prepare($consulta);
			$resultado -> execute();
			break;
	}
	//Envia el array final en formato JSON a JS.
	print json_encode ($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;
?>