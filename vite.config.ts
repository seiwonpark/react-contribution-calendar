/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [
    react(),
    dts({
      root: '.',
      include: ['src/types/**/*.d.ts', '**/*.{test,spec,e2e}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      outDir: 'dist',
      copyDtsFiles: true,
    }),
    tsConfigPaths(),
    libCss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    silent: true,
    setupFiles: ['./src/setupTest.ts'],
    include: ['src/**/*.spec.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
    },
  },
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'ContributionCalendar',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: 'styles/[name].[ext]',
      },
    },
    emptyOutDir: true,
  },
})
