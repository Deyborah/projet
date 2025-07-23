const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT type_practice_id , type_practice_name FROM type_practice');
        res.json(result.rows);
    } catch (err) {
        console.error('Erreur lors de la récupération des type de pratiques :', err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;