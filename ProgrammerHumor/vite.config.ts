import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ProgrammerHumor_Web/", // dont include in prod this is only for gh pages for elijah629 ( me )
  plugins: [vue()],
})
