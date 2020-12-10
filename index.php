 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/puntoventa.png" type="image/png">
    <title>Página Principal</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.18.0/css/mdb.min.css" rel="stylesheet">
    <!-- FontAwesome CSS -->
	<link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
    <!-- Sweet Alert -->
    <link rel="stylesheet" href="sweetalert/sweetalert2.min.css">
    <!-- Estilos CSS -->
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg navbar-dark gris scrolling-navbar fixed-top">
        <!-- Container para centrar -->
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <img src="img/negocios.png" width="40" height="40" alt="" loading="lazy">
            </a>
            <a class="navbar-brand" href="index.php">Punto de venta NWIND</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <!-- Esta liga es temporal -->
                <li class="nav-item">
                    <a class="nav-link" href="panelprincipal/dist.php">Datos Principales</a>
                </li>
            </ul>
            </div>
            <!-- Formulario de Buscar -->
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
                <input type="button" class="btn btn-outline-success my-2 my-sm-0" onclick="" value="IR">
            </form>
        </div>
    </nav><br><br><br><br>
    <p class="texto">Northwind es una base de una base de microsoft proporciona como ejemplo y puede ser descargada en la web oficial de microsoft. Durante el desarrollo de sql 2000 el equipo de desarrolladores de microsoft había creado su lenguaje de búsquedas estructurado Transact-Sql, junto a su nueva base de datos la cual llamaron Northwind, mediante el uso de su Transact-Sql Northwind tambien podía ser creado. Northwind era una base de datos mucho mejor que Pubs ya que además aparecía en la documentación de Access y esta base de datos podía ilustrar muchas nuevas características que poseía el nuevo sql.<br><br> En el momento en que se lanzó SQL Server 2000, gran parte de la documentación de SQL Server todavía hace referencia a pubs. Es por eso que ambas bases de datos se envían en un solo producto. Ya planeando las características para SQL, los equipos de inteligencia de negocios (BI) se sintieron rápidamente decepcionados por la falta de tamaño y complejidad en Pubs y Northwind. Para mostrar las características de Integration Services y Analysis Services, se necesitaría una base de datos de ejemplo de "mundo real".<br><br>Northwind simula una base de datos de una empresa de pedidos de diferentes productos y sus clientes.</p><br>
    <center><img src="img/nwind.jpg" alt=""></center>
</body>
</html>