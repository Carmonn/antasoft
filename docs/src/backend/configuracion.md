# Configuración

## Requisitos previos

Para poder ejecutar el backend es necesario:

1. Tener el archivo **.env** en la raíz del proyecto backend

- Este archivo contiene las variables de entorno necesarias para la conexión a la base de datos y la configuración del sistema.

::: info
Solicite el archivo .env al administrador, quien también le informará sobre la base de datos a utilizar.
:::

2. Contar con la **base de datos** en funcionamiento, ya sea:

- Localmente, en el equipo del desarrollador.
- En la nube, según la configuración del proyecto.

## Tecnologías utilizadas

- **Sequelize:** ORM utilizado para manejar consultas SQL de manera más sencilla y estructurada.
- **Arquitectura MVC parcial:** Se implementaron Modelos y Controladores para mantener el código escalable, fácil de mantener y con un alto nivel de abstracción.

::: info
La capa Vista no se utiliza en este backend, dado que la API se consume desde el frontend.
:::
