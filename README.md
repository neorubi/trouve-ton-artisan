🛠️ Trouve ton artisan — Plateforme régionale AURA

Projet réalisé dans le cadre du Titre Professionnel Développeur Web & Web Mobile (CEF).

Ce projet consiste à développer une plateforme permettant aux utilisateurs de trouver un artisan en Auvergne-Rhône-Alpes selon une catégorie ou une spécialité, et de le contacter via un formulaire sécurisé.

🚀 Fonctionnalités principales
🔎 Côté utilisateur

Recherche d’artisans par catégorie (Bâtiment, Services, Alimentation, Fabrication…)

Recherche par nom d’artisan

Affichage d’une fiche artisan complète :

nom

note + étoiles

spécialité

catégorie

ville

description “À propos”

lien vers le site web

formulaire de contact

Mise en avant des artisans du mois

Page 404 personnalisée

🧭 Côté interface

Navigation via React Router

UI responsive design (desktop + mobile)

Composants réutilisables (Header, Footer, ArtisanCard…)

🔐 Côté API & sécurité

Appels API protégés par clé API

Middleware Express requireApiKey

Sécurité renforcée via :

Helmet

CORS configuré

ORM Sequelize (anti-injection SQL)

Variables d’environnement (.env)

🧱 Technologies utilisées
🎨 Frontend

React + Vite

React Router

TailwindCSS

Fetch API

Vercel (déploiement)

⚙️ Backend

Node.js

Express.js

Sequelize (ORM)

MySQL / MariaDB

Render (déploiement)

📂 Structure du projet
/backend
  ├── src/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   └── app.js
  ├── database/
  │   ├── create.sql
  │   └── seed.sql
  └── package.json

/frontend
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── App.jsx
  │   └── main.jsx
  ├── public/
  └── package.json

⚙️ Installation du projet en local
1️⃣ Cloner le projet
git clone https://github.com/neorubi/trouve-ton-artisan
cd trouve-ton-artisan

🗄️ 2️⃣ Installation du backend
cd backend
npm install


Créer un fichier .env :

DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve-ton-artisan
DB_USER=root
DB_PASS=
API_KEY=ma_super_cle_api


Lancer le serveur :

npm run dev


➡️ Backend disponible sur : http://localhost:4000

💻 3️⃣ Installation du frontend
cd ../frontend
npm install


Créer un fichier .env :

VITE_API_URL=http://localhost:4000
VITE_API_KEY=ma_super_cle_api


Lancer le site :

npm run dev


➡️ Frontend disponible sur : http://localhost:5173

🧬 Base de données

La base contient 4 tables :

categories

specialites

artisans

messages (formulaire de contact)

Scripts SQL :

📄 create.sql → création des tables

📄 seed.sql → données d’exemple

🔒 Sécurité

Middleware requireApiKey

Helmet (protection des headers HTTP)

CORS configuré

Aucune donnée sensible en dur

Pas de cookies (évite CSRF)

ORM Sequelize (prévention injections SQL)

Séparation stricte frontend / backend

🚀 Déploiement

Frontend (Vercel)
https://trouve-ton-artisan-2h0pt4tw0-rubis-projects-7fffbfc3.vercel.app/

Backend (Render)
https://trouve-ton-artisan-backend.onrender.com/

👤 Auteur

Projet développé par Rubino Florent,
dans le cadre du TP Développeur Web & Web Mobile.