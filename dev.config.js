// Dev
import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
// Plugins
import handlebars from "vite-plugin-handlebars";
import HandlebarsUpdate from "./handlebarsUpdate";

export default defineConfig({
  root: "",
  publicDir: "assets",
  server: {
    port: "5000",
    open: "index.html",
    hmr: true,
    // Enable overlay for both errors and warnings.
    overlay: true,
    sourcemapIgnoreList(sourcePath, sourcemapPath) {
      return sourcePath.includes("node_modules");
    },
  },
  resolve: {
    alias: {
      "@img": resolve(__dirname, "sources/img/"),
      "@scss": resolve(__dirname, "sources/scss/"),
      "@js": resolve(__dirname, "sources/js/"),
    },
  },

  plugins: [
    handlebars({
      context: {},
      helpers: {},
      partialDirectory: resolve(__dirname, "partials"),
    }),
    HandlebarsUpdate(),
  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       // appSchoool: fileURLToPath(new URL("./index2.html", import.meta.url)),
  //     },
  //   },
  // },
});
