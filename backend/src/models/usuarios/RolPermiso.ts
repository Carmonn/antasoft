import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";
import { Rol } from "./Rol.js";
import { Permiso } from "./Permiso.js";

export class RolPermiso extends Model {
  declare id: number;
  declare rol_id: number;
  declare permiso_id: number;
}

RolPermiso.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rol_id: {
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
    tableName: "roles_permiso",
    timestamps: false,
  },
);

// Relaciones
RolPermiso.belongsTo(Rol, {
  foreignKey: "rol_id",
  as: "rol",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
RolPermiso.belongsTo(Permiso, {
  foreignKey: "permiso_id",
  as: "permiso",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
