import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv, lazyPlugins } from "vite-plus";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { unstableRolldownAdapter, analyzer } from "vite-bundle-analyzer";

const version = process.env.npm_package_version;

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  const buildSourceMaps = env.VITE_BUILD_SOURCEMAPS === "true";

  return defineConfig({
    staged: {
      "*": "vp check --fix",
    },
    fmt: {},
    lint: {
      plugins: ["typescript", "unicorn", "oxc", "vue"],
      categories: {
        correctness: "error",
      },
      rules: {
        "vite-plus/prefer-vite-plus-imports": "error",
        "no-misused-spread": "warn",
      },
      env: {
        builtin: true,
      },
      options: {
        typeAware: true,
        typeCheck: true,
      },
      jsPlugins: [
        {
          name: "vite-plus",
          specifier: "vite-plus/oxlint-plugin",
        },
      ],
    },
    plugins: lazyPlugins(() => [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: true, // css in js
          }),
        ],
      }),
      // vueDevTools(),
      // unstableRolldownAdapter(analyzer()),
    ]),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    define: {
      "process.env": loadEnv(mode, process.cwd()),
      "import.meta.env.VITE_VERSION": JSON.stringify(version),
    },
    base: "./",
    build: {
      sourcemap: buildSourceMaps,
      // cssCodeSplit: true,
      outDir: "dist",
      // outDir: 'public/assets/',
      assetsInlineLimit: 0,
      minify: !buildSourceMaps,
      rollupOptions: {
        output: {
          sanitizeFileName: false,
          manualChunks: (id) => {
            if (id.includes("vueuse")) {
              return "vueuse_vendors";
            }

            if (id.includes("lodash")) {
              return "lodash_vendors";
            }

            if (id.includes("seedrandom")) {
              return "seedrandom_vendors";
            }

            if (id.includes("moment") || id.includes("day")) {
              return "date_vendors";
            }

            if (id.includes("ant-design")) {
              return "ant_vendors";
            }

            if (id.includes("vue") && !id.includes(".vue")) {
              return "vue_vendors";
            }

            return undefined;
          },
        },
      },
    },
  });
};
