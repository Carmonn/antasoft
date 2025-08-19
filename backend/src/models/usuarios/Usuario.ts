import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class Usuario extends Model {
  declare id: number;
  declare persona_id: number;
  declare rol_id: number;
  declare correo: string;
  declare password: string;
  declare ultimo_acceso: Date | null;
}

Usuario.init(
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
    rol_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    ultimo_acceso: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "usuarios",
    timestamps: false,
  },
);
