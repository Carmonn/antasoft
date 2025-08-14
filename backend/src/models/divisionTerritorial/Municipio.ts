import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Municipio extends Model {
  declare cve_ent: number;
  declare cve_mun: number;
  declare nombre: string;
}

Municipio.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    estado_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    cve_ent: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    cve_mun: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "municipios",
    timestamps: false,
  },
);
