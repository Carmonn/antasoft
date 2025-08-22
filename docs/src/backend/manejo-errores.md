# Manejo de Errores Backend

El backend utiliza un sistema centralizado para el manejo de errores, basado en el archivo `src/middlewares/http-exception.ts`. Todos los errores relevantes se lanzan usando la función `createHttpException`, que recibe:

- `status`: Código HTTP de error (por ejemplo, 401, 404, 500).
- `message`: Mensaje principal del error.
- `cause`: Un objeto o arreglo de objetos con detalles adicionales, normalmente obtenidos de `errorHelpMap`.

## Flujo de trabajo para lanzar un error en el backend

El backend utiliza una función centralizada para lanzar errores personalizados: `createHttpException`. El flujo de trabajo típico es:

1. **Detectar la condición de error** (por ejemplo, usuario no encontrado, contraseña incorrecta, token inválido).
2. **Llamar a `createHttpException`** pasando:
   - **status**
   - **message**
   - **cause**

```typescript
import {
  createHttpException,
  ErrorHelpCode,
  errorHelpMap,
} from "../middlewares/http-exception";

// ... dentro de un controlador
if (!usuario) {
  throw createHttpException(
    404, //status
    "Usuario no encontrado", //message
    errorHelpMap[ErrorHelpCode.LOGIN_CORREO_NO_ENCONTRADO], //cause
  );
}
```

3. **El error es capturado por el middleware global de errores** (`errorHandler`), que lo transforma en una respuesta JSON estructurada para el frontend y lo envia.

```json
{
  "error": {
    "status": 401,
    "message": "Contraseña incorrecta",
    "details": [
      {
        "code": "LOGIN_PASSWORD_INCORRECTO",
        "detail": "La contraseña es incorrecta",
        "help": "Verifica que la contraseña sea correcta"
      }
    ]
  }
}
```
