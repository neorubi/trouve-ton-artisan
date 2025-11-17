import { sequelize } from "../config/db.js";
import Category from "./Category.js";
import Specialty from "./Specialty.js";
import Artisan from "./Artisan.js";
import Message from "./Message.js";

// Associations
Category.hasMany(Specialty, { foreignKey: "categorie_id" });
Specialty.belongsTo(Category, { foreignKey: "categorie_id" });

Specialty.hasMany(Artisan, { foreignKey: "specialite_id" });
Artisan.belongsTo(Specialty, { foreignKey: "specialite_id" });

Artisan.hasMany(Message, { foreignKey: "artisan_id" });
Message.belongsTo(Artisan, { foreignKey: "artisan_id" });

export { sequelize, Category, Specialty, Artisan, Message };
