const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const { splitVendorChunkPlugin } = require('vite')
const cachingPlugin = require('./vite-cache-plugin')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    react({
      // Only use React 17+ features
      jsxRuntime: 'automatic',
      // Disable legacy JSX transform
      jsxImportSource: 'react',
      // Use modern JS features
      babel: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              // Target browsers that support modern JavaScript features
              browsers: [
                'last 2 Chrome versions',
                'last 2 Firefox versions',
                'last 2 Safari versions',
                'last 2 Edge versions',
                'not IE 11'
              ]
            },
            // Only include polyfills that are actually used
            useBuiltIns: 'usage',
            // Use modern core-js version
            corejs: 3,
            // Don't transform modules
            modules: false,
            // Don't transform modern syntax
            loose: true
          }]
        ],
        plugins: [
          // Remove unnecessary polyfills
          ['@babel/plugin-transform-runtime', {
            corejs: false,
            helpers: true,
            regenerator: false,
            useESModules: true
          }]
        ]
      }
    }),
    splitVendorChunkPlugin(),
    cachingPlugin(),
  ],
  assetsInclude: ['**/*.lottie', '**/*.json'],
  build: {
    // Target modern browsers
    target: [
      'es2020',
      'edge88',
      'firefox78',
      'chrome87',
      'safari13.1'
    ],
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'react-scroll', '@heroicons/react'],
          'animation-vendor': ['aos', 'lottie-react', 'react-tsparticles'],
        },
        // Use modern module format
        format: 'es',
        // Generate modern code
        generatedCode: {
          preset: 'es2015',
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true,
          reservedNamesAsProps: false,
          symbols: true
        }
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
      target: 'es2020'
    },
    // Optimize CSS
    cssMinify: 'lightningcss',
    // Extract CSS to avoid FOUC
    css: {
      devSourcemap: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Use modern syntax for dependencies
    esbuildOptions: {
      target: 'es2020'
    }
  },
})
