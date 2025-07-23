const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT level_id, level_name FROM level');
        res.json(result.rows);
    } catch (err) {
        console.error('Erreur lors de la récupération des niveaux :', err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;