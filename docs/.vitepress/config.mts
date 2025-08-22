import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Antasoft-Docs",
  description: "Documentación para Antasoft",
  srcDir: "src",
  cleanUrls: true,
  lang: "es",

  head: [
    ['link', { rel: 'icon', href: '/assets/icon/sistemIcon.ico' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Inicio", link: "/" }
    ],

    sidebar: [
      {
        text: "Introducción",
        items: [
          { text: "¿Qué es Antasoft?", link: "/introduccion/que-es-antasoft" },
          { text: "Arquitectura y tecnologías", link: "/introduccion/arquitectura-tecnologias" },
        ]
      },
      {
        text: "Backend",
        items: [
          { text: "Configuración", link: "/backend/configuracion" },
          { text: "Diagrama entidad-relación", link: "/backend/diagrama-entidad-relacion" },
          { text: "Autenticación", link: "/backend/autenticacion" },
          { text: "Manejo de errores", link: "/backend/manejo-errores" }
        ]
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Carmonn/antasoft.git" },
    ],
  },
});
