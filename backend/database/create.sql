-- DDL pour "Trouve ton artisan"
-- Généré le 2025-11-03T10:03:16.017422

CREATE TABLE IF NOT EXISTS categories (
  id INT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  slug VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS specialites (
  id INT PRIMARY KEY,
  nom VARCHAR(120) NOT NULL,
  slug VARCHAR(140) NOT NULL UNIQUE,
  categorie_id INT NOT NULL,
  FOREIGN KEY (categorie_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS artisans (
  id INT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  note DECIMAL(2,1) NOT NULL DEFAULT 0.0,
  ville VARCHAR(100) NOT NULL,
  a_propos TEXT,
  email VARCHAR(180) NOT NULL,
  site_web VARCHAR(255),
  specialite_id INT NOT NULL,
  top TINYINT(1) NOT NULL DEFAULT 0,
  image_url VARCHAR(255),
  logo_url VARCHAR(255),
  FOREIGN KEY (specialite_id) REFERENCES specialites(id)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  artisan_id INT NOT NULL,
  nom VARCHAR(150) NOT NULL,
  email VARCHAR(180) NOT NULL,
  objet VARCHAR(180) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artisan_id) REFERENCES artisans(id)
);
