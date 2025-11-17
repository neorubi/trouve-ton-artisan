import { Router } from "express";
import { listArtisans, getArtisan } from "../controllers/artisans.js";
const router = Router();
router.get("/", listArtisans);
router.get("/:id", getArtisan);
export default router;
