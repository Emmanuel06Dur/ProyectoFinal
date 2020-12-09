<?php
	if(isset($_POST['submit']))
	{
		include_once "../bd/conexion.php";
		$objeto = new Conexion();
		$conexion = $objeto -> Conectar();

		$año = $_POST['añodate'];
		$mes = $_POST['mesdate'];

		$consulta = "SELECT e.employeeid, e.title,
				concat(e.firstname, ' ', e.lastname) as empleado,
				e.country,
				(
					select count(*) from orders o
					where o.employeeid=e.employeeid and year(o.orderdate)='$año' and month(o.orderdate)='$mes'
				) Cantidad,
				(
					select round(sum(od.quantity*od.unitprice), 2) from orders o join `order details` od
					on od.orderid=o.orderid
					where o.employeeid = e.employeeid
					and year(o.orderdate)='$año' and month(o.orderdate)='$mes'
				) Monto
				from employees e
				order by monto desc;";
		$resultado = $conexion -> prepare($consulta);
		$resultado -> execute();
		$data = $resultado -> fetchAll(PDO::FETCH_ASSOC);
		print json_encode ($data, JSON_UNESCAPED_UNICODE);
		//foreach ($conexion->query($data) as $row);
    	$conexion = NULL;
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <link rel="icon" type="image/png" href="../img/inventario.png">
        <title>Reporte de ordenes por empleado // NWIND</title>
        
        <link href="../panelprincipal/css/styles.css" rel="stylesheet" />
        <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous"></script>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">

            <a class="navbar-brand" href="../panelprincipal/dist.php">Página NWIND</a><button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>

            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Buscar ..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <!-- Herramientas parte superior derecha -->
                        <a class="dropdown-item" href="#">Herramientas</a>
                        <!-- Vinculo al activity log -->
                        <a class="dropdown-item" href="#">Actividad Reciente</a>
                        <div class="dropdown-divider"></div>
                        <!-- Vinculo al login (logout)-->
                        <a class="dropdown-item" href="../index.php">Cerrar Sesión</a>
                    </div>
                </li>
            </ul>

        </nav>

        <!-- Panel de control -->
        <div id="layoutSidenav">
            <!-- Barra lateral-->
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Principal</div>
                            <a class="nav-link" href="../panelprincipal/dist.php"
                                ><div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Registro de Ordenes
                            </a><a class="nav-link" href="#"
                                ><div class="sb-nav-link-icon"><i class="fas fa-dice"></i></div>
                                Detalles</a>

                            <div class="sb-sidenav-menu-heading">Datos</div>
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            
                            <div class="sb-nav-link-icon"><i class="fas fa-database"></i></div>
                                Cruds Principales
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <!-- CRUDS -->
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <!-- Navegacion de acerca de -->
                                <nav class="sb-sidenav-menu-nested nav">
                                    <!-- Link crud Pedro -->
                                    <a class="nav-link" href="../crudshtml/crudemployees.php">Employees</a>
                                    <!-- Link crud Martinez -->
                                    <a class="nav-link" href="../crudshtml/crudcustomers.php">Customers</a>
                                    <!-- Link crud Alexander -->
                                    <a class="nav-link" href="#">Shippers</a>
                                    <!-- Link crud Emmanuel -->
                                    <a class="nav-link" href="../crudshtml/crudsuppliers.php">Suppliers</a>
                                    <!-- Link crud Eliseo -->
                                    <a class="nav-link" href="#">Categories</a>
                                    <!-- Link crud Gaby -->
                                    <a class="nav-link" href="#">Products</a></nav>
                            </div>
                            <!-- Articulos disponibles-->
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            
                            <div class="sb-nav-link-icon"><i class="far fa-folder"></i></div>
                                Reportes
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            
                            <!-- Reportes DataBase -->
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                    Reportes Principales
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="../reportes/reporte1.php">Reporte de Ordenes por Empleado y Mes</a>
                                            <a class="nav-link" href="../reportes/reporte2.php">Reporte Cantidad de Productos Ordenados</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>

                            <div class="sb-sidenav-menu-heading">Extras</div>
                            <a class="nav-link" href="#">
                                <div class="sb-nav-link-icon"><i class="fas fa-user-tie"></i></div>
                                Administrar Usuarios
                            </a> 
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Editado y programado por:</div>
                        Equipo 2
                    </div>
                </nav>
            </div>

            <!-- Dentro del DashBoard-->
			<div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Reportes/ Reporte de ordenes por empleado</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Reporte 1</li>
                        </ol>
                        <div id="appEmployees">
                        <form action="<?php htmlspecialchars($_SERVER['PHP_SELF'])?>" method="POST" class="form-inline">
                        	Año: <input type="number" name="añodate" value="1996" min="1996" class="form-control" width="200"> 
                        	Mes: 
                        	<select name="mesdate" class="custom-select mr-sm-2">
                        		<option value="01" selected>Enero</option>
                        		<option value="02">Febrero</option>
                        		<option value="03">Marzo</option>
                        		<option value="04">Abril</option>
                        		<option value="05">Mayo</option>
                        		<option value="06">Junio</option>
                        		<option value="07">Julio</option>
                        		<option value="08">Agosto</option>
                        		<option value="09">Septiembre</option>
                        		<option value="10">Octubre</option>
                        		<option value="11">Noviembre</option>
                        		<option value="12">Diciembre</option>
                        	</select>
                            <button class="btn btn-primary" title="Nuevo" type="submit"><i class="fas fa-search"></i> Buscar Consulta</button><br><br>
                        </form><br>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>Tabla de Reporte 1</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>EmployeeID</th>
                                                <th>Title</th>
                                                <th>Empleado</th>
                                                <th>Country</th>
                                                <th>Cantidad</th>
                                                <th>Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                <td><?php echo $data['EmployeeID'];?></td>
                                                <td><?php echo $data['Title'];?></td>
                                                <td><?php echo $data['Empleado'];?></td>
                                                <td><?php echo $data['Country'];?></td>
                                                <td><?php echo $data['Cantidad'];?></td>
                                                <td><?php echo $data['Monto'];?></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
                </main>
                <!-- CopyRight -->
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; WebSite NWIND || 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>

            <!-- JQuery, Popper -->
        <script src = "../jquery/jquery-3.5.0.min.js"></script>
        <script src = "../popper/popper.min.js"></script>
        
        <!-- Vue.JS-->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <!-- Axios -->
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>
        <!-- Sweetalert -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

        <!-- maincrud.js -->
        <!-- <script src="../javascript/reporte1.js"></script> -->
        
        <!-- Librerias de diseño -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="../panelprincipal/js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
        <script src="../panelprincipal/assets/demo/chart-area-demo.js"></script>
        <script src="../panelprincipal/assets/demo/chart-bar-demo.js"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
        <script src="../panelprincipal/assets/demo/datatables-demo.js"></script>
</body>
</html>