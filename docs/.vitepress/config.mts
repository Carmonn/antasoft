import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Antasoft-Docs",
  description: "Documentación para Antasoft",
  srcDir: "src",
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/assets/icon/sistemIcon.ico' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Frontend", link: "/frontend" },
      { text: "Backend", link: "/backend" },
    ],

    sidebar: [
      {
        text: "Introducción",
        items: [
          { text: "¿Qué es Antasoft?", link: "/introduccion/que-es-antasoft" },
          { text: "Arquitectura y tecnologías", link: "/introduccion/arquitectura-tecnologias" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Carmonn/antasoft.git" },
    ],
  },
});
