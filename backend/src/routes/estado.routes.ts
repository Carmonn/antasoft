import { Hono } from "hono";
import { EstadoController } from "../controllers/estado.controller.js";

const estadoRoutes = new Hono();

estadoRoutes.get("/", EstadoController.getAll);
estadoRoutes.get("/:id", EstadoController.getById);

export default estadoRoutes;
