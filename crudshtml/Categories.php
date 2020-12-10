<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Punto de Venta - Nwind</title>

  <!-- Custom fonts for this template-->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <!-- Estilo Principal-->
  <link href="../css/estilos.css" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="../css/sb-admin-2.min.css" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="../index.php">
        <div class="sidebar-brand-icon">
          <i class="fas fa-store-alt"></i>
        </div>
        <div class="sidebar-brand-text mx-3">NWIND</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="../index.php">
          <i class="fa fa-home"></i>
          <span>Inicio</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">
        <!-- Heading -->
      <div class="sidebar-heading">
        Addons
      </div>

 

      <!-- Nav Item - Admin -->
      <li class="nav-item">
        <a class="nav-link" href="#">
        <i class="fas fa-address-card"></i>
          <span>Admin-Orders</span></a>
            <!-- Nav Item - Pages Collapse Menu -->
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages2" aria-expanded="true" aria-controls="collapsePages2">
          <i class="fas fa-info-circle"></i>
          <span>Reportes</span>
        </a>
        <div id="collapsePages2" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Reportes principales</h6>
            <a class="collapse-item" href="#">Reporte #1</a>
            <a class="collapse-item" href="Citas/Citas.php">Reporte #2</a>
          </div>
        </div>
      </li>


      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">


      <!-- Heading -->
      <div class="sidebar-heading">
        Interface
      </div>

           <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-info-circle"></i>
          <span>Informacion</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Registros De Tienda:</h6>
            <a class="collapse-item" href="Productos.php">Products</a>
            <a class="collapse-item" href="Categories.php">Categories</a>
            <a class="collapse-item" href="#">Shippers</a>
            <a class="collapse-item" href="#">Suppliers</a>
            <a class="collapse-item" href="#">Employees</a>
            <a class="collapse-item" href="#">Customers</a>
          </div>
        </div>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">



         
      <!-- Divider -->
      <hr class="sidebar-divider">
    
      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->
 
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">
        <!DOCTYPE html>
<html lang="es" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css1/main.css">
        <script type="text/javascript" src="https://kit.fontawesome.com/a076d05399.js"></script>
    </head>
    <body>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="index.html">
            <img src="../iconos_princ/proy.png" width="30" height="30" alt="" loading="lazy">
            PUNTO DE VENTA - NWIND
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link"> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>
    <div class="card">
        <div class="card-header">
          Crud Principales || Productos
        </div>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>  </title>
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		<!-- FontAwesom CSS -->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> 
		<!-- Sweet Alert 2 -->
		<link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">
		<!-- CSS custom -->
		<link rel="stylesheet" href="main.css">
	</head>
	<body>

		<div id="appMoviles">
			<div class="container">
				<div class="row">
					<div class="col">
						<button @click="btnAlta" class="btn btn-success" title="Nuevo"><i class="fas fa-plus-square"></i>Agregar Categorie</button>
					</div>
				</div>
				<div class="row nt-5">
					<div class="col-lg-12">
						<div class="table-responsive">
						<table class="table table-striped">
							<thead>

								<tr class="bg-outline-dark text-dark">
									<th>CategoryID</th>
									<th>CategoryName</th>
									<th>Description</th>
									<th>Acciones</th>
								</tr>

							</thead>
							<tbody>
								
								<tr v-for="(movil,indice) of moviles">
									<td> {{movil.CategoryID}} </td>
									<td> {{movil.CategoryName}} </td>
									<td> {{movil.Description}} </td>
									<td>
										<div class="btn-group" role="group">
											<button class="btn btn-secondary" title="Editar" @click="btnEditar(movil.CategoryID, movil.CategoryName, movil.Description)"><i class="fas fa-pencil-alt"></i>
											</button>
											<button class="btn btn-danger" title="Eliminar" @click="btnBorrar(movil.CategoryID)"><i class="fas fa-trash-alt"></i>
											</button>
										</div>
									</td>	
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			</div>
		</div>

		<!-- jQuery, Popper, js, Bootstrap JS -->
		<script src="jquery/jquery-3.5.1.min.js"> </script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"> </script>
		<script src="bootstrap/js/bootstrap.min.js"> </script>

		<!-- Vue.JS -->
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"> </script>

		<!-- Axios -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"> </script>

		<!-- Sweet Alert 2 -->
		<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"> </script>

		<!-- Código custom -->
		<script src="javacruds/categories.js"> </script>
	</body>
</html>
<!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery-3.5.1.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="../js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="../vendor/chart.js/Chart.min.js"></script>

  <!-- Page level custom scripts -->
  <script src="../js/demo/chart-area-demo.js"></script>
  <script src="../js/demo/chart-pie-demo.js"></script>

</body>

</html>
