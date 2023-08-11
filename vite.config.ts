import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id: any) {
  //         if (id.includes("node_modules")) {
  //           return id.split("/node_modules/").pop()?.split("/")[0]; // or simply return 'vendor' for a single vendor chunk
  //         }
  //       }
  //     }
  //   }
  // },
})

