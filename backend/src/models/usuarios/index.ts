import { Permiso } from "./Permiso.js";
import { Rol } from "./Rol.js";
import { RolPermiso } from "./RolPermiso.js";
import { Usuario } from "./Usuario.js";
import { UsuarioPermiso } from "./UsuarioPermiso.js";

// Rol ↔ Permiso
Rol.belongsToMany(Permiso, {
  through: "roles_permiso",
  foreignKey: "rol_id",
  otherKey: "permiso_id",
  as: "permisos",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Permiso.belongsToMany(Rol, {
  through: "roles_permiso",
  foreignKey: "permiso_id",
  otherKey: "rol_id",
  as: "roles",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

// Rol ↔ Usuario
Rol.hasMany(Usuario, {
  foreignKey: "rol_id",
  as: "usuarios",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
Usuario.belongsTo(Rol, {
  foreignKey: "rol_id",
  as: "rol",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

// Usuario ↔ Permiso
Usuario.belongsToMany(Permiso, {
  through: "usuarios_permiso",
  foreignKey: "usuario_id",
  otherKey: "permiso_id",
  as: "permisos",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Permiso.belongsToMany(Usuario, {
  through: "usuarios_permiso",
  foreignKey: "permiso_id",
  otherKey: "usuario_id",
  as: "usuarios",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

export { Permiso, Rol, RolPermiso, Usuario, UsuarioPermiso };
