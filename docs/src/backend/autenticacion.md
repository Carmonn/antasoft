# Autenticación Backend

Se utiliza JWT para proteger las rutas y bcrypt para el manejo seguro de contraseñas. Si un usuario intenta acceder a una ruta protegida sin un token válido, el sistema deniega el acceso y responde con un código de error **401 Unauthorized**.

## Flujo de Autenticación

1. **Login:**
   - El usuario envía su correo y contraseña.
   - El backend verifica el correo y la contraseña usando bcrypt.
   - Si es correcto, se genera un JWT y se envía al cliente (cookie `token`).

2. **Acceso a rutas protegidas:**
   - El cliente debe enviar el JWT en la cookie `token`.
   - El middleware valida el token antes de permitir el acceso.

::: info
El manejo de los cookies se realiza automáticamente a través de las cabeceras HTTP. El cliente no necesita preocuparse por los detalles de implementación.
:::

## Ejemplo de Login

```js
fetch("/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ correo: "usuario@dominio.com", password: "123456" }),
});
```

## Estructura del Token JWT

El token contiene el `usuarioId` y la fecha de expiración.

```json
{
  "usuarioId": 1,
  "exp": 1755803620
}
```

## Rutas protegidas

Cada endpoint protegido tiene un middleware que verifica la validez del token JWT ubicado en el archivo `src/middlewares/auth-token.ts`.

### Flujo de trabajo

1. El cliente envía una solicitud a un endpoint protegido.
2. El middleware extrae el token JWT de la cookie `token`.
3. Se verifica la firma y la fecha de expiración del token.
4. Si el token es válido, se permite el acceso al endpoint.
5. Si el token es inválido o falta, se retorna un error **401 Unauthorized**.

Para proteger una ruta simplemente se tiene que llamar al middleware de autenticación y colocarlo despues de la ruta que quieres proteger

```typescript
import { jwtAuth } from "./middlewares/auth-token.js";

app.use("/estados/*", jwtAuth); // Aqui proteges todas la rutas de estados
app.route("/estados", estadoRoutes);
```
