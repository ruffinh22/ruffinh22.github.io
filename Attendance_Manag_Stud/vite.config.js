import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration complète pour Vite
export default defineConfig({
  base: '/Attendance_Manag_Stud/', // Chemin de base pour GitHub Pages
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Nécessaire pour le mappage des ports du conteneur Docker
    strictPort: true,
    port: 5173, // Vous pouvez remplacer ce port par n'importe quel port disponible
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Configuration de fractionnement du code pour séparer les dépendances principales
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
