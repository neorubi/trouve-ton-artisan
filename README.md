# 🛠️ Trouve ton artisan — Plateforme régionale AURA

Projet réalisé dans le cadre du devoir bilan du titre professionnel **Développeur Web & Web Mobile**.

Ce site permet aux particuliers de **trouver facilement un artisan** en Auvergne-Rhône-Alpes, selon une catégorie ou une spécialité, et de le **contacter via un formulaire** dédié.

---

## 🚀 Fonctionnalités principales

- Consultation des artisans par **catégorie**
- Recherche d’un artisan par **nom**
- Affichage d’une **fiche artisan complète** :
  - nom
  - note + étoiles
  - spécialité
  - catégorie
  - localisation
  - à propos
  - site web
  - formulaire de contact
- Affichage des **artisans du mois**
- Navigation complète par **React Router**
- Appels API sécurisés via **clé API**

---

## 🧱 Technologies utilisées

### Frontend
- React.js
- Vite
- React Router
- TailwindCSS
- Fetch API

### Backend
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL ou MariaDB
- Middleware de sécurité (API Key)

---

## ⚙️ Installation du projet

### 1) Cloner le repository

```bash
git clone https://github.com/TON-REPO.git
cd trouve-ton-artisan
🗄️ Installation du backend
bash
Copier le code
cd backend
npm install
Créer un fichier .env :

ini
Copier le code
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve-ton-artisan
DB_USER=root
DB_PASS=
API_KEY=VOTRE_CLE_API
Lancer le backend :

bash
Copier le code
npm run dev
API disponible sur : http://localhost:4000

💻 Installation du frontend
bash
Copier le code
cd frontend
npm install
Créer un fichier .env :

ini
Copier le code
VITE_API_URL=http://localhost:4000
VITE_API_KEY=VOTRE_CLE_API
Lancer le site :

bash
Copier le code
npm run dev
Site disponible sur : http://localhost:5173

🗃️ Base de données
Le projet utilise une base MySQL / MariaDB comprenant :

Table categories

Table specialties

Table artisans

Le script SQL se trouve dans :
/backend/database/create.sql
/backend/database/seed.sql

🔒 Sécurité
Accès à l’API protégé par une clé API

Middleware requireApiKey dans Express

Prévention des attaques CSRF via absence de cookies cross-site

Prévention des injections SQL grâce à Sequelize

Sécurité backend et frontend séparée

🚀 Déploiement (à prévoir)
Frontend → Vercel

Backend → Render / Railway

Base de données → Planetscale / CleverCloud

👤 Auteur
Projet réalisé par Rubino Florent,
Dans le cadre du TP Développeur Web.