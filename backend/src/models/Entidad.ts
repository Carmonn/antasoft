import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Entidad extends Model {
  declare cve_ent: number;
  declare nombre: string;
  declare abreviatura: string | null;
}

Entidad.init(
  {
    cve_ent: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    abreviatura: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "entidades",
    timestamps: false,
  },
);
