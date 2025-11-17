import { Category, Specialty } from "../models/index.js";
export async function listCategories(req, res) {
  const cats = await Category.findAll({ include: { model: Specialty } });
  res.json(cats);
}
