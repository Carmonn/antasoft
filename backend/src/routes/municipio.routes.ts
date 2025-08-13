import { Hono } from "hono";
import { MunicipioController } from "../controllers/municipio.controller.js";

const municipioRoutes = new Hono();

municipioRoutes.get("/", MunicipioController.getAll);
municipioRoutes.get("/:id", MunicipioController.getById);

export default municipioRoutes;
