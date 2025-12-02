module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: ['./src/**/*.{js,jsx}', './index.html'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [/^dark/, /^active/, /^nav-/, /^logo-/, /^button-/],
          deep: [/^framer-motion/, /^lottie-/],
          greedy: [/^animate-/, /^bg-/, /^text-/]
        }
      },
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifyFontValues: true,
          colormin: true,
        }]
      }
    } : {})
  }
} 