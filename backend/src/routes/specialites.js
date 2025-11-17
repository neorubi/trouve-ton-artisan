import { Router } from "express";
import { listSpecialties } from "../controllers/specialites.js";
const router = Router();
router.get("/", listSpecialties);
export default router;
