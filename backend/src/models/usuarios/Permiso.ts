import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Permiso extends Model {
  declare id: number;
  declare nombre: string;
  declare descripcion: string | null;
  declare es_asignable: boolean;
}

Permiso.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    es_asignable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "permisos",
    timestamps: false,
  },
);
