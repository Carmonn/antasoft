import { serve } from "@hono/node-server";
import { Hono } from "hono";
import estadoRoutes from "./routes/estado.routes.js";
import municipioRoutes from "./routes/municipio.routes.js";

const app = new Hono();

app.route("/estados", estadoRoutes);
app.route("/municipios", municipioRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
