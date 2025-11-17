import { Router } from "express";
import { contactArtisan } from "../controllers/contact.js";
const router = Router();
router.post("/:id/contact", contactArtisan);
export default router;
