import { Estado } from "./divisionTerritorial/Estado.js";
import { Municipio } from "./divisionTerritorial/Municipio.js";

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
