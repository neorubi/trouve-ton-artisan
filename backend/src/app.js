import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
// import rateLimit from "express-rate-limit";
import { sequelize } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";

// ❗ IMPORTANT : on n'importe PLUS requireApiKey ici
// import { requireApiKey } from "./middleware/apiKey.js";

import categoriesRoute from "./routes/categories.js";
import specialitesRoute from "./routes/specialites.js";
import artisansRoute from "./routes/artisans.js";
import contactRoute from "./routes/contact.js";

const app = express();

// Sécurité de base
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
// app.use(rateLimit({ windowMs: 60 * 1000, limit: 100 }));

// CORS ouvert à tout le monde (suffisant pour ton devoir)
app.use(cors());
app.options("*", cors());

// 🌍 ROUTES PUBLIQUES (aucune protection API KEY)
app.get("/", (req, res) =>
  res.json({ ok: true, name: "Trouve ton artisan API" })
);

app.use("/categories", categoriesRoute);
app.use("/specialites", specialitesRoute);
app.use("/artisans", artisansRoute);
app.use("/artisans", contactRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected.");
  } catch (e) {
    console.error("DB connection failed:", e.message);
  }

  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
})();
