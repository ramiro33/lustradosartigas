<!-- index.html -->
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
            padding: 20px;
            background-color: #f9f9f9;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
            vertical-align: middle;
        }
        .header td {
            font-size: 24px;
            font-weight: bold;
            background-color: #fff;
        }
        .menu td {
            font-size: 18px;
            font-weight: bold;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        a:hover {
            text-decoration: underline;
        }
        img {
            max-height: 50px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <table>
        <tr class="header">
            <td><a href="index.html"><img src="logo.png" alt="Logo"></a></td>
            <td>LUSTRADOS Y CARPINTERÍA ARTIGAS</td>
        </tr>
        <tr class="menu">
            <td colspan="2"><a href="trabajos.html" target="_blank">TRABAJOS</a></td>
        </tr>
        <tr class="menu">
            <td><a href="contactos.html" target="_blank">CONTACTOS</a></td>
            <td>
                <a href="https://www.instagram.com/TU_USUARIO_DE_INSTAGRAM/" target="_blank"><img src="instagram_logo.png" alt="Instagram Logo"></a>
                <a href="https://wa.me/59892669143" target="_blank"><img src="whatsapp_logo.png" alt="WhatsApp Logo"></a>
            </td>
        </tr>
        <tr class="menu">
            <td><a href="resenas.html" target="_blank">RESEÑAS</a></td>
            <td>TELEFONO: 092 669 143</td>
        </tr>
    </table>
</body>
</html>

<!-- trabajos.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabajos - Lustrados y Carpintería Artigas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Aún no hay trabajos publicados</h1>
    <!-- Aquí puedes agregar imágenes de trabajos en el futuro, por ejemplo: <img src="trabajo1.jpg"> -->
</body>
</html>

<!-- contactos.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contactos - Lustrados y Carpintería Artigas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
        }
        img {
            max-height: 30px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <h1>Contactos</h1>
    <ul>
        <li>
            <a href="https://www.instagram.com/TU_USUARIO_DE_INSTAGRAM/" target="_blank">
                <img src="instagram_logo.png" alt="Instagram Logo"> Instagram
            </a>
        </li>
        <li>
            <a href="https://wa.me/59892669143" target="_blank">
                <img src="whatsapp_logo.png" alt="WhatsApp Logo"> WhatsApp (092 669 143 - Lustrados Artigas)
            </a>
        </li>
        <li>Teléfono: 092 669 143</li>
        <li>
            <a href="mailto:TU_EMAIL@gmail.com">
                <img src="gmail_logo.png" alt="Gmail Logo"> Gmail
            </a>
        </li>
    </ul>
</body>
</html>

<!-- resenas.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reseñas - Lustrados y Carpintería Artigas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        form {
            max-width: 600px;
            margin: 0 auto;
        }
        label {
            display: block;
            margin-bottom: 5px;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Deja tu reseña</h1>
    <form action="mailto:TU_EMAIL@gmail.com" method="post" enctype="text/plain">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="comentario">Comentario:</label>
        <textarea id="comentario" name="comentario" rows="5" required></textarea>

        <button type="submit">Enviar Reseña</button>
    </form>
    <!-- Nota: Esta forma envía por email como placeholder. Puedes cambiarla a un backend real más adelante. -->
</body>
</html>
