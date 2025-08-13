import { Estado } from "./localidad/Estado.js";
import { Municipio } from "./localidad/Municipio.js";

// Estados-Municipios
Estado.hasMany(Municipio, {
  foreignKey: "estado_id",
  as: "municipios",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
Municipio.belongsTo(Estado, {
  foreignKey: "estado_id",
  as: "estado",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

export { Estado, Municipio };
