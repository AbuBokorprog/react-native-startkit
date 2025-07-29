// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      "node_modules",
      "android",
      "ios",
      "build",
      "dist",
      "app-example",
      "metro.config.js",
      "tailwind.config.js",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    rules: {
      "prettier/prettier": "warn",
      "react/react-in-jsx-scope": "off",
      "react-native/no-inline-styles": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["*.js", "*.cjs"], // For config files and Node scripts
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: true,
        module: true,
        process: true,
        __dirname: true,
        console: true,
      },
    },
  },
  prettier,
];
