# Antasoft - Sistema CRM

**Antasoft** es un sistema tipo CRM desarrollado para **ADVR Consultores**, el cual permite manejar de forma sencilla e intuitiva la lógica de negocio de la empresa.

Este proyecto está organizado como un **monorepo**, lo que permite mantener en un solo lugar el código del frontend, backend y la documentación, manteniendo sus configuraciones y dependencias de forma separada pero controlada.

## 🧱 Requisitos
Es recomendable usar herramientas como nvm para manejar múltiples versiones de Node.js según el entorno del proyecto.

- Node.js -> 22.17.1
- MySQL -> 8.4.5

## 🌳 Estructura del proyecto
```bash
antasoft/
├── backend/
│ ├── src
│ ├── ..
│ └── package.json
|
├── docs/
│ ├── src
│ ├── ..
│ └── package.json
|
├── frontend/
│ ├── src
│ ├── ..
│ └── package.json
|
├── share/
├── ..
└── package.json
```

## 🔄 Flujo de trabajo 
Para mantener la calidad del código y asegurar un historial limpio y coherente, el proyecto está configurado para rechazar commits que no sigan la convención establecida (basada en Conventional Commits).

Por esta razón, los commits deben realizarse mediante un comando especialmente configurado.

>No importa desde qué subproyecto lo ejecutes (frontend, backend o docs), el comando funcionará correctamente desde cualquier carpeta del monorepo.
```bash
npm run cm
```

## ⚙️ Configuración inicial del monorepo

Antes de trabajar en cualquiera de los proyectos (frontend, backend o docs), es necesario preparar el entorno ejecutando un solo comando desde la raíz del repositorio. Este comando se encargará de:
- Instalar las dependencias del monorepo raíz.
- Instalar las dependencias de cada subproyecto.
- Inicializar los hooks de Git con Husky.
  - Conventional Comits: Estandariza los mensajes commit.
  - ESLint: Detección de errores de estilo o código.
  - Prettier: Formateo automático de código.

```bash
antasoft/   <--- Ejecutar a este nivel
├── backend/
├── docs/
├── frontend/
└── package.json
```

Estando en la raiz del proyecto debes ejecutar
```bash
npm run begin
```

## 📚 Inicialización de subproyectos

Cada subproyecto (frontend, backend, docs) tiene sus propias particularidades, por lo que se recomienda revisar su documentación específica antes de realizar cambios importantes.

Sin embargo, a continuación se muestra cómo iniciar cada uno de forma general para desarrollo local:

### 🖥️ Frontend
Deberas ingresar a la carpeta frontend

```bash
antasoft/   
├── frontend/ <--- Ejecutar a este nivel
│ ├── src             
│ ├── ..
│ └── package.json
│
├── ..
└── package.json
```

dentro de la carpeta frontend debes ejecutar el comando:
```bash
npm run dev
```

### 🛠️ Backend
Asegúrate de tener la base de datos correctamente instalada, ademas de contar con un archivo de configuración que contenga las credenciales necesarias para la conexión a la base de datos

Deberas ingresar a la carpeta backend

```bash
antasoft/   
├── backend/ <---- Ejecutar a este nivel
│ ├── src             
│ ├── ..
│ └── package.json
│
├── ..
└── package.json
```

dentro de la carpeta backend debes ejecutar el comando:
```bash
npm run dev
```

### 📘 Docs
Deberas ingresar a la carpeta docs

```bash
antasoft/   
├── docs/ <------- Ejecutar a este nivel
│ ├── src             
│ ├── ..
│ └── package.json
│
├── ..
└── package.json
```

dentro de la carpeta docs debes ejecutar el comando:
```bash
npm run dev
```
