import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Allows access from any device in the same network
    port: 5174, // Default Vite port (change if needed)
    open: true, // Automatically open the app in the browser  }
  }
})
