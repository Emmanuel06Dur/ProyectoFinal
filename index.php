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
                <li class="nav-item">
                    <a class="nav-link" href="#iniciarsesionaqui">Iniciar Sesión</a>
                </li>
                <!-- Esta liga es temporal -->
                <li class="nav-item">
                    <a class="nav-link" href="panelprincipal/dist.php">Cruds (temporal)</a>
                </li>
            </ul>
            </div>
            <!-- Boton Estilo Noche/Dark -->
            <!--button class="switch" id="switch">
                <span><i class="fas fa-sun"></i></span>
                <span><i class="fas fa-moon"></i></span>
            </button-->
            <!-- Formulario de Buscar -->
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
                <input type="button" class="btn btn-outline-success my-2 my-sm-0" onclick="" value="IR">
            </form>
        </div>
    </nav>
    <br>
    <br>
    <br>
    <br>
    <br>
    <a name="iniciarsesionaqui"></a>
    <section class="iniciarsesion" id="inisi">
        <div id="parallax-inise">
            <div class="opacidad">
                <div id="texto">
                    <form method="post" id="IntentarIngresar">
                        <a>Iniciar sesion</a>

                        <div class="wrap-input100">
                            <input class="input100" type="text" id="usuario-ini" name="usuario-ini" placeholder="Usuario">
                        </div>
                        <div class="wrap-input100">
                            <input class="input100" type="password" id="contraseña-ini" name="contraseña-ini" placeholder="Contraseña">
                        </div>
                        <button type="submit" name="submit" class="btn btn-success" id="button-submit">Ingresar</button>
                    </form>
                </div>
            </div>
         </div>
    </section>

    <!-- Codigos JS -->
    <script src="jquery/jquery-3.5.0.min.js"></script>
    <script src="sweetalert/sweetalert2.all.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="javascript/validar-ingresar.js"></script>
</body>
</html>