const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT category_id, category_name FROM category');
        res.json(result.rows);
    } catch (err) {
        console.error('Erreur lors de la récupération des catégories :', err.message);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;