<?php
	session_start();

	include_once 'conexion.php';
	$objeto=new Conexion();
	$conexion=$objeto -> Conectar();

	$usuario=(isset($_POST['usuario'])) ? $_POST['usuario'] : '';
	$contraseña=(isset($_POST['password'])) ? $_POST['password'] : '';

	$contra = md5($contraseña);
	$consulta="SELECT Usuario, Password FROM `employees` WHERE Usuario='$usuario' AND Password='$contra'";
	$resultado=$conexion -> prepare($consulta);
	$resultado->execute();

	if($resultado->rowCount() >= 1)
	{
		$data=$resultado->fetchAll(PDO::FETCH_ASSOC);
		$_SESSION["s_usuario"]=$usuario;
	}
	else
	{
		$_SESSION["s_usuario"]=null;
		$data=null;
	}
	print json_encode($data);
	$conexion=null;
?>