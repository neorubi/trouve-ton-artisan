import { Op } from "sequelize";
import { Artisan, Specialty, Category } from "../models/index.js";
export async function listArtisans(req, res) {
  const { search, categorie, specialite, ville, top } = req.query;
  const where = {};
  if (typeof top !== "undefined") where.top = top === "true" || top === "1";
  if (ville) where.ville = { [Op.like]: `%${ville}%` };
  if (search) where.nom = { [Op.like]: `%${search}%` };
  if (specialite) where.specialite_id = specialite;
  const include = [{ model: Specialty, include: [Category] }];
  let items = await Artisan.findAll({ where, include, order: [["note", "DESC"]] });
  if (categorie) {
    items = items.filter(a => a.Specialty && a.Specialty.Category && String(a.Specialty.Category.id) === String(categorie));
  }
  res.json(items);
}

export async function getArtisan(req, res) {
  const { id } = req.params;
  const item = await Artisan.findByPk(id, { include: [{ model: Specialty, include: [Category] }] });
  if (!item) return res.status(404).json({ error: "Artisan not found" });
  res.json(item);
}
