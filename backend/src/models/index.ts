import { Estado } from "./divisionTerritorial/Estado.js";
import { Municipio } from "./divisionTerritorial/Municipio.js";
import { TipoContacto } from "./personas/TipoContacto.js";
import { Contacto } from "./personas/Contacto.js";
import { Persona } from "./personas/Persona.js";
import { PersonaMunicipio } from "./personas/PersonaMunicipio.js";

// Estados-Municipios (divisionTerritorial)
// ------------------
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

// Contacto-TipoContacto-Persona-PersonaMunicipio (personas)
// -----------------------------
// Un tipo de contacto puede tener muchos contactos
TipoContacto.hasMany(Contacto, {
  foreignKey: "tipo_contacto_id",
  as: "contactos",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
// Un contacto pertenece a un tipo de contacto
Contacto.belongsTo(TipoContacto, {
  foreignKey: "tipo_contacto_id",
  as: "tipoContacto",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
// Cada persona puede tener muchos contactos
Persona.hasMany(Contacto, {
  foreignKey: "persona_id",
  as: "contactos",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
// Cada contacto pertenece a una persona
Contacto.belongsTo(Persona, {
  foreignKey: "persona_id",
  as: "persona",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
// Cada persona puede estar asociada a muchos personaMunicipios
Persona.hasMany(PersonaMunicipio, {
  foreignKey: "persona_id",
  as: "personaMunicipios",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
// Cada personaMunicipio pertenece a una persona
PersonaMunicipio.belongsTo(Persona, {
  foreignKey: "persona_id",
  as: "persona",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export { Estado, Municipio, TipoContacto, Contacto, Persona, PersonaMunicipio };
