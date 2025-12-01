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

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 60 * 1000, limit: 100 }));

// Restrict API (except maybe categories for the header menu)
app.use((req, res, next) => {
  if (req.path.startsWith("/categories")) return next();
  return requireApiKey(req, res, next);
});

app.get("/", (req, res) => res.json({ ok: true, name: "Trouve ton artisan API" }));

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
    // En prod (Render), on continue quand même pour que l'API démarre.
  }

  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
})();



// TODO: add logging system

