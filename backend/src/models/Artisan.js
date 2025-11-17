import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Artisan extends Model {}
Artisan.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(150), allowNull: false },
  note: { type: DataTypes.DECIMAL(2,1), allowNull: false, defaultValue: 0.0 },
  ville: { type: DataTypes.STRING(100), allowNull: false },
  a_propos: { type: DataTypes.TEXT },
  email: { type: DataTypes.STRING(180), allowNull: false },
  site_web: { type: DataTypes.STRING(255) },
  specialite_id: { type: DataTypes.INTEGER, allowNull: false },
  top: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  image_url: { type: DataTypes.STRING(255) },
  logo_url: { type: DataTypes.STRING(255) },
}, { sequelize, modelName: "Artisan", tableName: "artisans", timestamps: false });

export default Artisan;
