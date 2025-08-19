import { TipoContacto } from "./TipoContacto.js";
import { Contacto } from "./Contacto.js";
import { Persona } from "./Persona.js";
import { PersonaMunicipio } from "./PersonaMunicipio.js";

// TipoContacto ↔ Contacto
TipoContacto.hasMany(Contacto, {
  foreignKey: "tipo_contacto_id",
  as: "contactos",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
Contacto.belongsTo(TipoContacto, {
  foreignKey: "tipo_contacto_id",
  as: "tipoContacto",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

// Persona ↔ Contacto
Persona.hasMany(Contacto, {
  foreignKey: "persona_id",
  as: "contactos",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Contacto.belongsTo(Persona, {
  foreignKey: "persona_id",
  as: "persona",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// Persona ↔ PersonaMunicipio
Persona.hasMany(PersonaMunicipio, {
  foreignKey: "persona_id",
  as: "personaMunicipios",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
PersonaMunicipio.belongsTo(Persona, {
  foreignKey: "persona_id",
  as: "persona",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export { TipoContacto, Contacto, Persona, PersonaMunicipio };
