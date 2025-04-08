// /model/conexion.js
const { Pool } = require('pg');

// Configuración directa de la conexión
const pool = new Pool({
  user: 'postgres',              // Usuario de la base de datos
  host: 'localhost',             // Dirección del servidor
  database: 'CODEMASTER',        // Nombre de la base de datos
  password: 'Auab220222',        // Contraseña de la base de datos
  port: 5432,                    // Puerto donde escucha PostgreSQL
});

// Verificación de conexión
pool.connect()
  .then(() => console.log('✅ Conectado a PostgreSQL - CODEMASTER'))
  .catch(err => {
    console.error('❌ Error de conexión:', err);
    process.exit(1);
  });

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
