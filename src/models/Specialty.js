import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Specialty extends Model {}
Specialty.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(120), allowNull: false },
  slug: { type: DataTypes.STRING(140), allowNull: false, unique: true },
  categorie_id: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, modelName: "Specialty", tableName: "specialites", timestamps: false });

export default Specialty;
