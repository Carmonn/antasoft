import { Clave } from "./Clave.js";
import { Cliente } from "./Cliente.js";
import { Sucursal } from "./Sucursal.js";
import { TipoClave } from "./TipoClave.js";

// Cliente ↔ Sucursal
Cliente.hasMany(Sucursal, {
  foreignKey: "cliente_id",
  as: "sucursales",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
Sucursal.belongsTo(Cliente, {
  foreignKey: "cliente_id",
  as: "cliente",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

// Sucursal ↔ Clave
Sucursal.hasMany(Clave, {
  foreignKey: "sucursal_id",
  as: "claves",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Clave.belongsTo(Sucursal, {
  foreignKey: "sucursal_id",
  as: "sucursal",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// TipoClave ↔ Clave
TipoClave.hasMany(Clave, {
  foreignKey: "tipo_clave_id",
  as: "claves",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
Clave.belongsTo(TipoClave, {
  foreignKey: "tipo_clave_id",
  as: "tipoClave",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

export { Clave, Cliente, Sucursal, TipoClave };
