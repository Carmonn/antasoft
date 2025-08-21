import dotenv from "dotenv";

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { errorHandler } from "./middlewares/http-exception.js";
import { jwtAuth } from "./middlewares/auth-token.js";

import loginRoutes from "./routes/login.routes.js";
import estadoRoutes from "./routes/estado.routes.js";
import municipioRoutes from "./routes/municipio.routes.js";

dotenv.config();

const app = new Hono();

app.use("*", logger());

app.route("/login", loginRoutes);

app.use("/estados", jwtAuth);
app.route("/estados", estadoRoutes);
app.use("/municipios", jwtAuth);
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
