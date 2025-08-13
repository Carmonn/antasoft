import { Hono } from "hono";
import { EntidadController } from "../controllers/entidad.controller.js";

const entidadRoutes = new Hono();

entidadRoutes.get("/", EntidadController.getAll);
entidadRoutes.get("/:cve_ent", EntidadController.getById);

export default entidadRoutes;
