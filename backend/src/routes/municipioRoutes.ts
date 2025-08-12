import { Hono } from "hono";
import { MunicipioController } from "../controllers/MunicipioController.js";

const municipioRoutes = new Hono();

municipioRoutes.get("/", MunicipioController.getAll);
municipioRoutes.get("/:cve_ent/:cve_mun", MunicipioController.getById);

export default municipioRoutes;
