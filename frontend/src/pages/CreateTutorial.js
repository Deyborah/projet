import React, { useState, useEffect } from 'react';
import '../css/CreateTutorial.css';

const CreateTutorial = () => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [levelId, setLevelId] = useState('');
    const [categorieId, setCategorieId] = useState('');
    const [typePratiqueId, setTypePratiqueId] = useState('');
    const [typeTutoId, setTypeTutoId] = useState('');
    const [photo, setPhoto] = useState(null);
    const [userId] = useState(1); // à remplacer par le user connecté

    // Données dynamiques
    const [levels, setLevels] = useState([]);
    const [categories, setCategories] = useState([]);
    const [typePratiques, setTypePratiques] = useState([]);
    const [typeTutos, setTypeTutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [levelRes, catRes, typePraRes, typeTutoRes] = await Promise.all([
                    fetch('http://localhost:5000/levels'),
                    fetch('http://localhost:5000/category'),
                    fetch('http://localhost:5000/typepratiques'),
                    fetch('http://localhost:5000/typeTuto')
                ]);

                const levels = await levelRes.json();
                const categories = await catRes.json();
                const typePratiques = await typePraRes.json();
                const typeTutos = await typeTutoRes.json();

                setLevels(levels);
                setCategories(categories);
                setTypePratiques(typePratiques);
                setTypeTutos(typeTutos);
            } catch (err) {
                console.error('Erreur lors de la récupération des données :', err);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async () => {
        let photoUrl = null;

        if (photo) {
            const formData = new FormData();
            formData.append('photo', photo);

            try {
                const res = await fetch('http://localhost:5000/upload-photo', {
                    method: 'POST',
                    body: formData,
                });
                const data = await res.json();
                photoUrl = data.imageUrl; 
            } catch (err) {
                console.error('Erreur lors de l\'upload de la photo:', err);
                return; 
            }
        }

        console.log({
            titre,
            description,
            levelId,
            categorieId,
            typePratiqueId,
            typeTutoId,
            photo: photoUrl, // url ou null si pas de photo
            userId
        });
    };
    return (
        <div className="create-tutorial-container">
            <input
                type="text"
                placeholder="Ajouter le nom du tuto:"
                className="tutorial-input"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
            />

            <div className="tutorial-form">
                <div className="tutorial-photo-and-options">
                    <div className="photo-upload">
                        <label htmlFor="photo-input">Télécharger votre photo:</label>
                        <input
                            type="file"
                            accept="image/*"
                            id="photo-input"
                            style={{ display: 'none' }}
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>

                    <div className="tutorial-options">
                        <select value={levelId} onChange={(e) => setLevelId(e.target.value)}>
                            <option value="">Sélectionner un niveau</option>
                            {levels.map((level) => (
                                <option key={level.level_id} value={level.level_id}>
                                    {level.level_name}
                                </option>
                            ))}
                        </select>

                        <select value={categorieId} onChange={(e) => setCategorieId(e.target.value)}>
                            <option value="">Catégorie</option>
                            {categories.map((cat) => (
                                <option key={cat.category_id} value={cat.category_id}>
                                    {cat.category_name}
                                </option>
                            ))}
                        </select>

                        <select value={typePratiqueId} onChange={(e) => setTypePratiqueId(e.target.value)}>
                            <option value="">Type de pratique</option>
                            {typePratiques.map((typepractice) => (
                                <option key={typepractice.type_practice_id} value={typepractice.type_practice_id}>
                                    {typepractice.type_practice_name}
                                </option>
                            ))}
                        </select>

                        <select value={typeTutoId} onChange={(e) => setTypeTutoId(e.target.value)}>
                            <option value="">Type de tutoriel</option>
                            {typeTutos.map((typetuto) => (
                                <option key={typetuto.type_tutorial_id} value={typetuto.type_tutorial_id}>
                                    {typetuto.type_tutorial_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="tutorial-text">
                    <label>Explications :</label>
                    <textarea
                        placeholder="Ajouter votre texte explicatif"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>Valider</button>
        </div>
    );
};

    export default CreateTutorial;