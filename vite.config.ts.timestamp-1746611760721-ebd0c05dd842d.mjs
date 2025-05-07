// vite.config.ts
import { defineConfig } from "file:///Users/alepsios/dev/mine/open-source/phone-select/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/alepsios/dev/mine/open-source/phone-select/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import tailwindcss from "file:///Users/alepsios/dev/mine/open-source/phone-select/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "node:path";
var __vite_injected_original_import_meta_url = "file:///Users/alepsios/dev/mine/open-source/phone-select/vite.config.ts";
var __dirname = fileURLToPath(new URL(".", __vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    tailwindcss()
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: 'dist/stats.html'
    // })
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "PhoneSelect",
      fileName: (format) => `alexbednov-phone-select.${format}.js`,
      formats: ["es", "umd"]
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["vue", "reka-ui"],
      output: {
        globals: {
          vue: "Vue",
          "reka-ui": "RekaUI"
        },
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".svg")) {
            return "assets/flags/[name][extname]";
          }
          if (assetInfo.name?.endsWith(".css")) {
            return "assets/style.css";
          }
          return "assets/[name][extname]";
        }
      }
    },
    copyPublicDir: false,
    assetsDir: "assets",
    outDir: "dist",
    emptyOutDir: true,
    assetsInlineLimit: 0
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  assetsInclude: ["**/*.svg"],
  optimizeDeps: {
    exclude: ["fs"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWxlcHNpb3MvZGV2L21pbmUvb3Blbi1zb3VyY2UvcGhvbmUtc2VsZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWxlcHNpb3MvZGV2L21pbmUvb3Blbi1zb3VyY2UvcGhvbmUtc2VsZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hbGVwc2lvcy9kZXYvbWluZS9vcGVuLXNvdXJjZS9waG9uZS1zZWxlY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4nLCBpbXBvcnQubWV0YS51cmwpKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICAvLyB2aXN1YWxpemVyKHtcbiAgICAvLyAgIG9wZW46IHRydWUsXG4gICAgLy8gICBnemlwU2l6ZTogdHJ1ZSxcbiAgICAvLyAgIGJyb3RsaVNpemU6IHRydWUsXG4gICAgLy8gICBmaWxlbmFtZTogJ2Rpc3Qvc3RhdHMuaHRtbCdcbiAgICAvLyB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ1Bob25lU2VsZWN0JyxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgYWxleGJlZG5vdi1waG9uZS1zZWxlY3QuJHtmb3JtYXR9LmpzYCxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ11cbiAgICB9LFxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ3Jla2EtdWknXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICAncmVrYS11aSc6ICdSZWthVUknXG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lPy5lbmRzV2l0aCgnLnN2ZycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9mbGFncy9bbmFtZV1bZXh0bmFtZV0nXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZT8uZW5kc1dpdGgoJy5jc3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvc3R5bGUuY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9bbmFtZV1bZXh0bmFtZV0nXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDBcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgIH1cbiAgfSxcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLnN2ZyddLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2ZzJ11cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxvQkFBb0I7QUFDbFcsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFVBQVU7QUFMeUwsSUFBTSwyQ0FBMkM7QUFRM1AsSUFBTSxZQUFZLGNBQWMsSUFBSSxJQUFJLEtBQUssd0NBQWUsQ0FBQztBQUU3RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLFdBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLDJCQUEyQixNQUFNO0FBQUEsTUFDdkQsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyxTQUFTO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsV0FBVztBQUFBLFFBQ2I7QUFBQSxRQUNBLFNBQVM7QUFBQSxRQUNULGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLE1BQU0sU0FBUyxNQUFNLEdBQUc7QUFDcEMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxVQUFVLE1BQU0sU0FBUyxNQUFNLEdBQUc7QUFDcEMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxJQUNmLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxXQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLGVBQWUsQ0FBQyxVQUFVO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLElBQUk7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
