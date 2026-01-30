import { defineConfig } from 'vite'
import react from '@vitejs/react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecoinlink-platform/", // 이 줄이 깃허브 주소 연결에 핵심입니다!
})
