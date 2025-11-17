import Joi from "joi";
import { Artisan, Message } from "../models/index.js";

const schema = Joi.object({
  nom: Joi.string().min(2).max(150).required(),
  email: Joi.string().email().required(),
  objet: Joi.string().min(2).max(180).required(),
  message: Joi.string().min(5).required(),
});

export async function contactArtisan(req, res, next) {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body, { abortEarly: false });
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return res.status(404).json({ error: "Artisan not found" });
    const saved = await Message.create({ artisan_id: id, ...value });
    // TODO: plug real email service later (nodemailer or external)
    res.status(201).json({ ok: true, id: saved.id });
  } catch (err) {
    next(err);
  }
}
