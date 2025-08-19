import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Sucursal extends Model {
  declare id: number;
  declare cliente_id: number;
  declare municipio_id: number;
  declare nombre: string;
  declare direccion: string | null;
}

Sucursal.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cliente_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    municipio_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "sucursales",
    timestamps: false,
  },
);
