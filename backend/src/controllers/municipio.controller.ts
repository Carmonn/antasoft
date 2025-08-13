import type { Context } from "hono";
import { Estado, Municipio } from "../models/index.js";

export class MunicipioController {
  static async getAll(c: Context) {
    const municipios = await Municipio.findAll({
      include: [{ model: Estado, as: "estado" }],
    });
    return c.json(municipios);
  }

  static async getById(c: Context) {
    const id = Number(c.req.param("id"));
    const municipio = await Municipio.findOne({
      where: { id },
      include: [{ model: Estado, as: "estado" }],
    });
    return c.json(municipio);
  }
}
