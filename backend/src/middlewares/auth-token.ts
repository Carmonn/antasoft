import { type Next, type Context } from "hono";

import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";

import {
  createHttpException,
  errorHelpMap,
  ErrorHelpCode,
} from "./http-exception.js";

export const jwtAuth = async (c: Context, next: Next) => {
  const token = getCookie(c, "token");
  if (!token) {
    throw createHttpException(
      401,
      "No autorizado",
      errorHelpMap[ErrorHelpCode.NO_AUTORIZADO],
    );
  }
  const isValid = await verify(token, process.env.JWT_SECRET as string);
  if (!isValid) {
    throw createHttpException(
      401,
      "No autorizado",
      errorHelpMap[ErrorHelpCode.NO_AUTORIZADO],
    );
  }
  await next();
};
