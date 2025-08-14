import { Estado } from "./Estado.js";
import { Municipio } from "./Municipio.js";

// Cada estado puede tener muchos municipios
Estado.hasMany(Municipio, {
  foreignKey: "estado_id",
  as: "municipios",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
// Cada municipio pertenece a un estado
Municipio.belongsTo(Estado, {
  foreignKey: "estado_id",
  as: "estado",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

export { Estado, Municipio };
