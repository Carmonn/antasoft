import type { Context } from "hono";
import { Municipio } from "../models/Municipio.js";
import { Entidad } from "../models/Entidad.js";

export class MunicipioController {
  static async getAll(c: Context) {
    const municipios = await Municipio.findAll({
      include: [{ model: Entidad, as: "entidad" }],
    });
    return c.json(municipios);
  }

  static async getById(c: Context) {
    const cve_ent = Number(c.req.param("cve_ent"));
    const cve_mun = Number(c.req.param("cve_mun"));
    const municipio = await Municipio.findOne({
      where: { cve_ent, cve_mun },
      include: [{ model: Entidad, as: "entidad" }],
    });
    return c.json(municipio);
  }
}
