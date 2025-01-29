import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import tailwind from "eslint-plugin-readable-tailwind";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default ts.config(
  // Formatting
  stylistic.configs["recommended-flat"],
  perfectionist.configs["recommended-alphabetical"],
  { plugins: { "readable-tailwind": tailwind } },

  // Linting
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],

    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    rules: {
      ...tailwind.configs.error.rules,
      // "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }],
      // "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@stylistic/max-statements-per-line": ["error", { max: 2 }],
      // "@stylistic/member-delimiter-style": ["error", {}], // {} overrides recommended-flat config with default.
      // "@stylistic/max-len": ["error", { code: 170 }],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "no-restricted-syntax": ["error",
        {
          message: "FunctionExpression: Arrow functions preferred",
          selector: "FunctionExpression[generator=false]:not(:has(ThisExpression)):not(Property[kind='get'] > .value):not(Property[kind='set'] > .value)",
        },
        {
          message: "FunctionDeclaration: Arrow functions preferred",
          selector: "FunctionDeclaration[generator=false]:not(:has(ThisExpression)):not(MethodDefinition[kind='get'] > .value):not(MethodDefinition[kind='set'] > .value)",
        },
      ],
      "readable-tailwind/multiline": ["error", { preferSingleLine: true, printWidth: 999 }],
    },
  },
);
