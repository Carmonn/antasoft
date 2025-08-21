import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";

import { LoginPostSchema } from "@antasoft/shared";
import { UsuarioController } from "../controllers/index.js";

const loginRoutes = new Hono();

loginRoutes.post("/", zValidator("json", LoginPostSchema), async (c) => {
  const { correo, password } = await c.req.json();
  const usuario = await UsuarioController.verificarCorreoPassword(
    correo,
    password,
  );

  const payload = {
    usuarioId: usuario.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira en 1 hora
  };

  const secret = process.env.JWT_SECRET as string;
  const token = await sign(payload, secret);
  setCookie(c, "token", token);

  return c.json({ payload, token });
});

loginRoutes.post("/hash", async (c) => {
  const { password } = await c.req.json();
  await UsuarioController.hashearPassword(password);
  return c.json("OK");
});

export default loginRoutes;
