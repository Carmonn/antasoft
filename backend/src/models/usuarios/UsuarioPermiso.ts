import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class UsuarioPermiso extends Model {
  declare id: number;
  declare usuario_id: number;
  declare permiso_id: number;
}

UsuarioPermiso.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    permiso_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "usuarios_permiso",
    timestamps: false,
  },
);
