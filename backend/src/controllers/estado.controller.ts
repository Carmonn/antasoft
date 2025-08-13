import type { Context } from "hono";
import { Estado, Municipio } from "../models/index.js";

export class EstadoController {
  static async getAll(c: Context) {
    const estados = await Estado.findAll();
    return c.json(estados);
  }

  static async getById(c: Context) {
    const id = Number(c.req.param("id"));
    const estado = await Estado.findByPk(id, {
      include: [{ model: Municipio, as: "municipios" }],
    });
    return c.json(estado);
  }
}
