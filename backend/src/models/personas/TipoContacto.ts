import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class TipoContacto extends Model {
  declare id: number;
  declare nombre: string;
}

TipoContacto.init(
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
    tableName: "tipos_contacto",
    timestamps: false,
  },
);
