import { Specialty } from "../models/index.js";
export async function listSpecialties(req, res) {
  const { categorie } = req.query;
  const where = categorie ? { categorie_id: categorie } : {};
  const specs = await Specialty.findAll({ where });
  res.json(specs);
}
