import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { sequelize } from "./config/db.js";
import { requireApiKey } from "./middleware/apiKey.js";
import { errorHandler } from "./middleware/errorHandler.js";

import categoriesRoute from "./routes/categories.js";
import specialitesRoute from "./routes/specialites.js";
import artisansRoute from "./routes/artisans.js";
import contactRoute from "./routes/contact.js";

const app = express();

// 🔐 Sécurité de base
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 60 * 1000, limit: 100 }));

// 🌍 CORS SIMPLE : on autorise toutes les origines (pour ton projet CEF c'est ok)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "X-API-Key"],
  })
);

// 🔑 API Key : on laisse passer OPTIONS + /categories, on protège le reste
app.use((req, res, next) => {
  // Preflight CORS → on répond sans exiger la clé
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  // /categories accessible sans clé (pour ton menu)
  if (req.path.startsWith("/categories")) {
    return next();
  }

  // Tout le reste nécessite la clé API
  return requireApiKey(req, res, next);
});

// ✅ Routes
app.get("/", (req, res) =>
  res.json({ ok: true, name: "Trouve ton artisan API" })
);

app.use("/categories", categoriesRoute);
app.use("/specialites", specialitesRoute);
app.use("/artisans", artisansRoute);
app.use("/artisans", contactRoute);

// Gestion des erreurs
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected.");
  } catch (e) {
    console.error("DB connection failed:", e.message);
    // En prod (Render), on continue quand même pour que l'API démarre.
  }

  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
})();

// TODO: add logging system
