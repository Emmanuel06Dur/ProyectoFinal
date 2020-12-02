<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <link rel="icon" type="image/png" href="../img/inventario.png">
        <title>Suppliers // NWIND</title>
        
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
                                    <a class="nav-link" href="#">Employees</a>
                                    <!-- Link crud Martinez -->
                                    <a class="nav-link" href="#">Customers</a>
                                    <!-- Link crud Alexander -->
                                    <a class="nav-link" href="#">Shippers</a>
                                    <!-- Link crud Emmanuel -->
                                    <a class="nav-link" href="crudsuppliers.php">Suppliers</a>
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
                                            <a class="nav-link" href="#">Reporte de Ordenes por Empleado y Mes</a>
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
                        Equipo 3
                    </div>
                </nav>
            </div>

            <!-- Dentro del dashboard (principal) -->

            <div id="layoutSidenav_content">
                <main>
                
                    <div class="container-fluid">
                        <h1 class="mt-4">Cruds/ Suppliers</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Suppliers</li>
                        </ol>
                        <div id="appSuppliers">
                        <div class="col">
                            <button @click="btnAlta" class="btn btn-primary" title="Nuevo"><i class="fas fa-parachute-box"></i>  Añadir Supplier</button><br><br>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header"><i class="fas fa-table mr-1"></i>Tabla de suppliers</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>SupplierID</th>
                                                <th>CompanyName</th>
                                                <th>ContactName</th>
                                                <th>ContactTitle</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>Region</th>
                                                <th>PostalCode</th>
                                                <th>Country</th>
                                                <th>Phone</th>
                                                <th>Fax</th>
                                                <th>HomePage</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for = "(sup, indice) of suppliers">
                                                <td>{{sup.SupplierID}}</td>
                                                <td>{{sup.CompanyName}}</td>
                                                <td>{{sup.ContactName}}</td>
                                                <td>{{sup.ContactTitle}}</td>
                                                <td>{{sup.Ubication}}</td>
                                                <td>{{sup.City}}</td>
                                                <td>{{sup.Region}}</td>
                                                <td>{{sup.PostalCode}}</td>
                                                <td>{{sup.Country}}</td>
                                                <td>{{sup.Phone}}</td>
                                                <td>{{sup.Fax}}</td>
                                                <td>{{sup.HomePage}}</td>
                                                <td>
									                <div class = "btn-group" role = "group">
										                <button class = "btn btn-secondary" title = "Editar" @click = "btnEditar()"><i class = "fas fa-pencil-alt"></i></button>
										                <button class = "btn btn-danger" title = "Eliminar" @click = "btnBorrar(sup.SupplierID)"><i class = "fas fa-trash-alt"></i></button>
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
        <script src="../javascript/crudsuppliers.js"></script>
        
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