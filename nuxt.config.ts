// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-auth-utils',
  ],

  runtimeConfig: {
    // Server-only environment variables
    databaseUrl: process.env.DATABASE_URL,
    sessionSecret: process.env.SESSION_SECRET,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    storageBasePath: process.env.STORAGE_BASE_PATH,
    uploadDir: process.env.UPLOAD_DIR,

    // Public environment variables (exposed to client)
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },

  // Enable server-side rendering
  ssr: true,

  // Nitro server config
  nitro: {
    preset: 'node-server', // Railway uses Node.js preset

    // Storage configuration (local development)
    storage: {
      uploads: {
        driver: 'fs',
        base: process.env.UPLOAD_DIR || './uploads',
      },
    },
  },

  // Development server
  devServer: {
    port: 3000,
    host: 'localhost',
  },

  // Enable detailed error messages in dev
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 24679, // Change from default 24678
      },
    },
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },


  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  compatibilityDate: '2025-01-15',
})
