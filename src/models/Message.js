import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Message extends Model {}
Message.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  artisan_id: { type: DataTypes.INTEGER, allowNull: false },
  nom: { type: DataTypes.STRING(150), allowNull: false },
  email: { type: DataTypes.STRING(180), allowNull: false },
  objet: { type: DataTypes.STRING(180), allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: "Message", tableName: "messages", timestamps: false });

export default Message;
