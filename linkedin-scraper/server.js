const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Autorise les requêtes CORS
app.use(bodyParser.json()); // Permet de lire les requêtes en JSON

// Route pour recevoir les commentaires
app.post('/receive-comments', (req, res) => {
    const comments = req.body.comments;

    if (!comments || comments.length === 0) {
        return res.status(400).json({ error: "Aucun commentaire reçu" });
    }

    console.log("✅ Commentaires reçus :", comments);

    // Répondre avec un message de confirmation
    res.json({ message: "Commentaires enregistrés avec succès !" });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});
