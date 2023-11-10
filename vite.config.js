/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: [
            './src/test/setup.ts',
            // './src/setupTest.ts'
        ],
        coverage: {
            all: true,
            provider: 'v8', // or 'v8'
        },
    },
});
