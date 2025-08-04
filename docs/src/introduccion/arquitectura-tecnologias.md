# Arquitectura del sistema

Antasoft se basa en una arquitectura cliente-servidor moderna que separa claramente la lógica de presentación (frontend) de la lógica de negocio y datos (backend).

## Diagrama general

::: tip
Próximamente se integrará un diagrama visual aquí.
:::

## Componenetes principales

- 🖥️ **Frontend**: Aplicación SPA hecha con Vue.js, conectada a la API por medio de peticiones HTTP. Utiliza Vite, Pinia, Vue Router, Vuetify y Vee-Validate.

- ⚙️ **Backend**: API desarrollada con Node.js y Hono. Se encarga de manejar la lógica del negocio, validaciones, autenticación y conexión a la base de datos.

- 🗄️ **Base de datos**: Base de datos relacional MySQL, estructurada para contener información como usuarios, licitaciones, permisos, historial, etc.

- 🔁 **Comunicación**: Toda la comunicación se realiza mediante una API RESTful, con datos en formato JSON. Las validaciones se realizan con Zod tanto en el cliente como en el servidor.

---

# Herramientas y tecnologías

### Lenguaje de programación

Para el desarrollo del sistema se utilizó **TypeScript** tanto en el lado del cliente como en el servidor. Esta decisión permite un desarrollo más consistente, facilitando el mantenimiento al trabajar con un único lenguaje en toda la aplicación. Además, el uso compartido de estructuras como interface, enum, type y class (denominadas “contracts”) simplifica la integración entre el frontend y el backend.

---

### Tecnologías

#### 🖥️ Frontend

El frontend está desarrollado con [Vue.js](https://vuejs.org), un framework progresivo, reactivo y de curva de aprendizaje accesible. Esta elección permite una rápida incorporación de nuevos desarrolladores al proyecto. Sobre Vue se integraron las siguientes tecnologías:

- [Vuetify:](https://vuetifyjs.com/en/) Framework de componentes que facilita la creación de interfaces complejas, modernas y adaptables.
- [Vee-Validate:](https://vee-validate.logaretm.com/v4/) Para la validación de formularios de forma declarativa y eficiente.
- [Pinia:](https://pinia.vuejs.org) Sistema de manejo de estado que permite compartir y sincronizar datos de forma reactiva entre distintos componentes.
- [Vue-Router:](https://router.vuejs.org) Para la gestión de rutas y navegación, incluyendo protección de rutas según roles o permisos de usuario.
- [Vite:](https://vite.dev) Herramienta de desarrollo y empaquetado moderno, que mejora los tiempos de compilación y facilita la depuración.

#### ⚙️ Backend

El backend está desarrollado con Node.js y el framework [Hono](https://hono.dev), aprovechando su compatibilidad con TypeScript para mantener una base de código unificada y coherente con el frontend. Esta elección facilita la reutilización de contratos (interfaces, types, enums) y mejora la mantenibilidad del sistema. Además, se integraron las siguientes tecnologías:

- [MySQL:](https://www.mysql.com) Sistema de gestión de base de datos relacional.

#### Validación de datos

Se utilizo [Zod](https://zod.dev) tanto en el frontend como en el backend para la validación de datos. Esta elección permite reutilizar esquemas de validación a lo largo del sistema, reduciendo errores y facilitando el mantenimiento.

#### Documentación

La documentación técnica del sistema se desarrolló con [VitePress](https://vitepress.dev), herramienta basada en Vue y Markdown que permite incluir componentes interactivos, ejemplos en vivo y lógica personalizada en la documentación.

### Herramientas

Durante el desarrollo del sistema se utilizaron diversas herramientas que facilitaron tareas clave:

- [Visual Studio Code](https://code.visualstudio.com): Editor de código principal.
- [Postman:](https://www.postman.com) Para la prueba, visualización y documentación de los endpoints de la API.
- [TablePlus:](https://tableplus.com) Cliente gráfico para la gestión de la base de datos.
- [GitHub Copilot:](https://github.com/features/copilot) Asistente de programación con IA que sugiere código, buenas prácticas y optimizaciones.
- [ChatGPT:](https://chatgpt.com) Asistente para resolver dudas, encontrar errores y acelerar el proceso de desarrollo.
