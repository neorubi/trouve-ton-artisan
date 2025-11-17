# Trouve ton artisan

Plateforme (AURA) pour trouver un artisan, consulter sa fiche et le contacter.

## Prérequis
- Node.js >= 18
- MySQL (ou MariaDB)

## Démarrage rapide (backend + BDD)

```bash
# 1) BDD (dans MySQL)
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS artisans_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
mysql -u root -p artisans_db < database/create.sql
mysql -u root -p artisans_db < database/seed.sql

# 2) API
cd backend
cp .env.example .env
# Édite .env selon ta config MySQL et choisis une API_KEY
npm install
npm run start

# Test
curl http://localhost:4000/categories
curl -H "X-API-Key: <ta_cle>" "http://localhost:4000/artisans?search=lyon"
```

## Endpoints
- `GET /categories`
- `GET /specialites?categorie=:id`
- `GET /artisans?search=&categorie=&specialite=&ville=&top=`
- `GET /artisans/:id`
- `POST /artisans/:id/contact` (body: `{ nom, email, objet, message }`)

## Frontend (React + Tailwind)
À initialiser ensuite (Vite + React + Tailwind). Le header devra charger les libellés des catégories via `GET /categories`.

// TODO: add logging