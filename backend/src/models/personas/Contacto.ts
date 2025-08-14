import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Contacto extends Model {
  declare id: number;
  declare persona_id: number;
  declare metodo_contacto_id: number;
  declare valor: string;
}

Contacto.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    persona_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tipo_contacto_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    valor: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "contactos",
    timestamps: false,
  },
);
