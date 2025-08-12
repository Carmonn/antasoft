import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";
import { Entidad } from "./Entidad.js";

export class Municipio extends Model {
  declare cve_ent: number;
  declare cve_mun: number;
  declare nombre: string;
}

Municipio.init(
  {
    cve_ent: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    cve_mun: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
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

// Relación
Municipio.belongsTo(Entidad, {
  foreignKey: "cve_ent",
  targetKey: "cve_ent",
  as: "entidad",
});
Entidad.hasMany(Municipio, {
  foreignKey: "cve_ent",
  sourceKey: "cve_ent",
  as: "municipios",
});
