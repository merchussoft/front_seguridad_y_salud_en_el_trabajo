import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    headers: {
      // Deshabilitar 'interest-cohort' en el encabezado Permissions-Policy
      'Permissions-Policy': 'interest-cohort=()'
    }
  }
})
