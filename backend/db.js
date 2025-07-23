
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    max: 10, // Max 10 connexions simultanées
    idleTimeoutMillis: 30000, // Ferme une connexion inactive après 30 sec
    connectionTimeoutMillis: 2000, // Timeout si connexion trop lente
});

module.exports = pool;