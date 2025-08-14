import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Persona extends Model {
  declare id: number;
  declare tipo: string;
  declare alias: string | null;
  declare nombre: string;
  declare ap_paterno: string | null;
  declare ap_materno: string | null;
  declare fecha_cumpleanios: Date | null;
}

Persona.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: [["usuario", "gestor"]],
      },
    },
    alias: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ap_paterno: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    ap_materno: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    fecha_cumpleanios: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "personas",
    timestamps: false,
  },
);
