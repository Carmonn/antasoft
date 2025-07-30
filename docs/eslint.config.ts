// eslint.config.ts - Configuration matching frontend structure
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import markdownPlugin from "eslint-plugin-markdown";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  // Base JavaScript recommendations
  js.configs.recommended,

  // Vue.js recommended configuration
  ...vuePlugin.configs["flat/recommended"],

  // Markdown plugin configuration
  ...markdownPlugin.configs.recommended,

  // Skip formatting - same as frontend
  skipFormatting,

  // Global ignores - including VitePress cache
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/.vitepress/cache/**",
      "**/.vitepress/dist/**",
      "**/public/**",
    ],
  },

  // TypeScript files configuration
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
      "no-unused-vars": "off",
      "prefer-const": "warn",
      "no-var": "warn",
    },
  },

  // Vue files configuration
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser,
      },
      globals: {
        defineClientComponent: "readonly",
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    plugins: {
      vue: vuePlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
      "vue/require-default-prop": "off",
      "vue/no-unused-components": "warn",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // Markdown files - lint code blocks only
  {
    files: ["**/*.md"],
    plugins: {
      markdown: markdownPlugin,
    },
    processor: "markdown/markdown",
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "off",
    },
  },

  // Code blocks in markdown
  {
    files: ["**/*.md/*.{js,ts,vue}"],
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        // Vue
        ref: "readonly",
        reactive: "readonly",
        // Hono
        Hono: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "no-console": "off",
      "no-undef": "off",
      // Still catch critical errors
      "no-unreachable": "error",
      "no-constant-condition": "error",
      "use-isnan": "error",
    },
  },
];
