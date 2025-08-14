import { TipoContacto } from "./TipoContacto.js";
import { Contacto } from "./Contacto.js";
import { Persona } from "./Persona.js";
import { PersonaMunicipio } from "./PersonaMunicipio.js";

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

export { TipoContacto, Contacto, Persona, PersonaMunicipio };
