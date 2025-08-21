import { HTTPException } from "hono/http-exception";
import type { Context } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";

type ICause = {
  code?: ErrorHelpCode; // opcional, para errores específicos
  detail?: string;
  help?: string;
};

type IMultiCause = ICause | ICause[]; // para múltiples errores

export function createHttpException(
  status: ContentfulStatusCode | undefined,
  message: string,
  cause: IMultiCause,
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
        message: err.message || "Error interno del servidor",
      },
    },
    500,
  );
};

export enum ErrorHelpCode {
  LOGIN_CORREO_NO_ENCONTRADO = "LOGIN_CORREO_NO_ENCONTRADO",
  LOGIN_PASSWORD_INCORRECTO = "LOGIN_PASSWORD_INCORRECTO",
  NO_AUTORIZADO = "NO_AUTORIZADO",
}
export const errorHelpMap: Record<ErrorHelpCode, ICause> = {
  [ErrorHelpCode.NO_AUTORIZADO]: {
    code: ErrorHelpCode.NO_AUTORIZADO,
    detail: "No estás autorizado para acceder a este recurso",
    help: "Asegúrate de haber iniciado sesión",
  },
  [ErrorHelpCode.LOGIN_CORREO_NO_ENCONTRADO]: {
    code: ErrorHelpCode.LOGIN_CORREO_NO_ENCONTRADO,
    detail: "El usuario no existe",
    help: "Verifica que el correo electrónico sea correcto",
  },
  [ErrorHelpCode.LOGIN_PASSWORD_INCORRECTO]: {
    code: ErrorHelpCode.LOGIN_PASSWORD_INCORRECTO,
    detail: "La contraseña es incorrecta",
    help: "Verifica que la contraseña sea correcta",
  },
};
