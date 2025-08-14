import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Rol extends Model {
  declare id: number;
  declare nombre: string;
}

Rol.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "roles",
    timestamps: false,
  },
);
