import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Cliente extends Model {
  declare id: number;
  declare nombre: string;
}

Cliente.init(
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
    tableName: "clientes",
    timestamps: false,
  },
);
