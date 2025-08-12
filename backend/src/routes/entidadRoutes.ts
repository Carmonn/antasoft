import { Hono } from "hono";
import { EntidadController } from "../controllers/EntidadController.js";

const entidadRoutes = new Hono();

entidadRoutes.get("/", EntidadController.getAll);
entidadRoutes.get("/:cve_ent", EntidadController.getById);

export default entidadRoutes;
