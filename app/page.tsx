<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lustrados y Carpintería Artigas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            display: grid;
            grid-template-columns: 150px 1fr;
            grid-template-rows: auto 1fr;
            height: 100vh;
        }
        header {
            grid-column: 2 / 3;
            padding: 20px;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            border-bottom: 2px solid black;
        }
        nav {
            grid-column: 1 / 2;
            grid-row: 1 / span 2;
            border-right: 2px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10px;
        }
        nav img {
            width: 100px;
            cursor: pointer;
        }
        nav a {
            text-decoration: none;
            font-weight: bold;
            margin: 20px 0;
            color: black;
        }
        nav a:hover {
            text-decoration: underline;
        }
        main {
            grid-column: 2 / 3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
        .social {
            display: flex;
            gap: 50px;
            align-items: center;
        }
        .social img {
            width: 80px;
            cursor: pointer;
        }
        footer {
            grid-column: 2 / 3;
            text-align: center;
            padding: 10px;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>

    <div class="container">
        <nav>
            <a href="index.html">
                <img src="logo.png" alt="Logo Lustrados">
            </a>
            <a href="trabajos.html">TRABAJOS</a>
            <a href="contactos.html">CONTACTOS</a>
            <a href="resenas.html">RESEÑAS</a>
        </nav>

        <header>
            LUSTRADOS Y CARPINTERÍA<br>ARTIGAS
        </header>

        <main>
            <div class="social">
                <a href="https://instagram.com/tuperfil" target="_blank">
                    <img src="instagram.png" alt="Instagram Logo">
                </a>
                <a href="https://wa.me/59892669143?text=Hola%20Lustrados%20Artigas" target="_blank">
                    <img src="whatsapp.png" alt="Whatsapp Logo">
                </a>
            </div>
        </main>

        <footer>
            TELÉFONO: 092 669 143
        </footer>
    </div>

</body>
</html>
