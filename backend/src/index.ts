import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { errorHandler } from "./middlewares/http-exception.js";

import estadoRoutes from "./routes/estado.routes.js";
import municipioRoutes from "./routes/municipio.routes.js";

const app = new Hono();

app.use("*", logger());

app.route("/estados", estadoRoutes);
app.route("/municipios", municipioRoutes);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.onError(errorHandler);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
