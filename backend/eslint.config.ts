// eslint.config.ts
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import nodePlugin from "eslint-plugin-n";

export default [
  // Base JavaScript recommendations
  js.configs.recommended,

  // Global ignores
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**", "**/*.js"],
  },

  // TypeScript configuration for backend with Hono
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        // Node.js globals
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        setImmediate: "readonly",
        clearImmediate: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
      n: nodePlugin,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": "error",

      // Prettier formatting
      "prettier/prettier": "error",

      // General rules
      "no-console": "off", // Allow console for server logging
      "no-unused-vars": "off", // Use TypeScript version instead
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-template": "error",

      // Node.js specific rules
      "n/no-missing-import": "off", // TypeScript handles this
      "n/no-unpublished-import": "off", // Allow dev dependencies
      "n/no-unsupported-features/es-syntax": "off", // TypeScript transpiles

      // Hono/API specific rules
      "no-async-promise-executor": "error",
      "require-await": "warn",
    },
  },

  // Specific rules for test files (if you add them later)
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off",
    },
  },
];
