const pool = require('../db');

exports.createTutorial = async (req, res) => {
    try {
        const {
            title,
            explains,
            level_id,
            category_id,
            type_practice_id,
            type_tuto_id,
            user_id
        } = req.body;

        const result = await pool.query(
            `INSERT INTO tutorial 
            (title, explains, level_id, category_id, type_practice_id, type_tuto_id, user_id) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [title, explains, level_id, category_id, type_practice_id, type_tuto_id, user_id]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erreur création tuto :', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};