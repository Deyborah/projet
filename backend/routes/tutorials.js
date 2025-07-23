const express = require('express');
const router = express.Router();
const pool = require('../db');

// Exemple route GET pour récupérer tous les tutoriels
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tutorials');
        res.json(result.rows);
    } catch (err) {
        console.error('Erreur serveur:', err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Exemple route POST pour créer un tutoriel (à adapter)
router.post('/', async (req, res) => {
    const { titre, description, levelId, categorieId, typePratiqueId, typeTutoId, photo, userId } = req.body;
    try {
        const result = await pool.query(
            `INSERT INTO tutorials (titre, description, level_id, categorie_id, type_pratique_id, type_tuto_id, photo, user_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
            [titre, description, levelId, categorieId, typePratiqueId, typeTutoId, photo, userId]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erreur serveur:', err.message);
        res.status(500).send('Erreur serveur');
    }
});

// Route POST pour créer un tutoriel
router.post('/', async (req, res) => {
    const {
        titre,
        description,
        levelId,
        categorieId,
        typePratiqueId,
        typeTutoId,
        photoPath,  
        userId
    } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO tutorials 
      (tuto_title, explains, level_id, category_id, type_practice_id, type_tutorial_id, photo, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [titre, description, levelId, categorieId, typePratiqueId, typeTutoId, photoPath, userId]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erreur lors de l\'insertion en base :', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = router;