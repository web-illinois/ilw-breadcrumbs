import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-breadcrumbs",
            entry: "ilw-breadcrumbs.js",
            fileName: "ilw-breadcrumbs",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-breadcrumbs.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
