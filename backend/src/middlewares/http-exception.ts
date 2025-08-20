import { HTTPException } from "hono/http-exception";
import type { Context } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";

type ICause = {
  code?: string;
  detail?: string;
  help?: string;
};

type IMultiCause = ICause | ICause[]; // para múltiples errores

export function createHttpException(
  status: ContentfulStatusCode | undefined,
  message: string,
  cause?: IMultiCause,
) {
  // normalizamos siempre a array
  const normalizedCause: ICause[] | undefined = cause
    ? Array.isArray(cause)
      ? cause
      : [cause]
    : undefined;

  return new HTTPException(status, { message, cause: normalizedCause });
}

export const errorHandler = (err: Error, c: Context) => {
  if (err instanceof HTTPException) {
    const status = err.status;
    const message = err.message;
    const causes = (err.cause as ICause[] | undefined) || [];

    return c.json(
      {
        error: {
          status,
          message,
          details: causes.map((e) => ({
            code: e?.code || "ERROR_DESCONOCIDO",
            detail: e?.detail,
            help: e?.help,
          })),
        },
      },
      status,
    );
  }

  return c.json(
    {
      error: {
        status: 500,
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      },
    },
    500,
  );
};
