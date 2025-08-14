import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class TipoClave extends Model {
  declare id: number;
  declare nombre: string;
}

TipoClave.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "tipos_clave",
    timestamps: false,
  },
);
