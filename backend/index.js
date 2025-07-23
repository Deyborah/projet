const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const PracticeRoutes = require('./routes/practice');
app.use('/typepratiques', PracticeRoutes);

const levelsRoutes = require('./routes/level');
app.use('/levels', levelsRoutes);

const categoryRoutes = require('./routes/category');
app.use('/category', categoryRoutes);

const typeTutoRoutes = require('./routes/typeTuto');
app.use('/typeTuto', typeTutoRoutes);

const tutorialsRoutes = require('./routes/tutorials');
app.use('/tutorials', tutorialsRoutes);

// Configuration multer pour stocker dans /uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueName + ext);
    }
});

const upload = multer({ storage });

// Rendre le dossier uploads accessible publiquement
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route POST pour upload
app.post('/upload-photo', upload.single('photo'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});