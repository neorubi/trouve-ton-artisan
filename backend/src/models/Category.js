import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Category extends Model {}
Category.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(100), allowNull: false },
  slug: { type: DataTypes.STRING(120), allowNull: false, unique: true },
}, { sequelize, modelName: "Category", tableName: "categories", timestamps: false });

export default Category;
