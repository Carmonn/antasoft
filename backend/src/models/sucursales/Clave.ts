import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Clave extends Model {
  declare id: number;
  declare tipo_clave_id: number;
  declare sucursal_id: number;
  declare valor: string;
}

Clave.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tipo_clave_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    sucursal_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    valor: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "claves",
    timestamps: false,
  },
);
