import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '~images' : path.resolve(__dirname, 'static/imgs'),
      '~config' : path.resolve(__dirname, 'src/config')
    }
  }
})
