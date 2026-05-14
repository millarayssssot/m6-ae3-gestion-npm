// Importación de módulos npm
const express = require('express');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Configuración de variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Caso de uso: Simulación de Registro de Usuario con Bcrypt
app.post('/registro', async (req, res) => {
    const { username, password } = req.body;
    
    // Encriptamos la contraseña antes de guardarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    console.log(`Usuario ${username} registrado con hash: ${hashedPassword}`);
    res.json({ mensaje: "Usuario registrado de forma segura" });
});

// Caso de uso: Login y generación de JWT
app.post('/login', (req, res) => {
    // Simulamos que el usuario es válido
    const user = { id: 1, username: "Millaray" };
    
    // Generamos el token usando una clave secreta del .env
    const token = jwt.sign(user, process.env.SECRET_KEY || 'clave_secreta_provisoria');
    
    res.json({ token });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});