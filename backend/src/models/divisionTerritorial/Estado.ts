import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Estado extends Model {
  declare cve_ent: number;
  declare nombre: string;
  declare abreviatura: string | null;
}

Estado.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    cve_ent: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
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
    tableName: "estados",
    timestamps: false,
  },
);
