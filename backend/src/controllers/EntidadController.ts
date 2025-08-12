import type { Context } from "hono";
import { Entidad } from "../models/Entidad.js";
import { Municipio } from "../models/Municipio.js";

export class EntidadController {
  static async getAll(c: Context) {
    const entidades = await Entidad.findAll();
    return c.json(entidades);
  }

  static async getById(c: Context) {
    const cve_ent = Number(c.req.param("cve_ent"));
    const entidad = await Entidad.findByPk(cve_ent, {
      include: [{ model: Municipio, as: "municipios" }],
    });
    return c.json(entidad);
  }
}
