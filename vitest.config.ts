import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import {playwright} from "@vitest/browser-playwright";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.ts',
        browser: {
            enabled: false,
            provider: playwright(),
            headless: true,
        },
    },
})
