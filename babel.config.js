export default {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: [
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Safari versions',
          'last 2 Edge versions',
          'not IE 11'
        ]
      },
      useBuiltIns: 'usage',
      corejs: 3,
      modules: false,
      loose: true
    }]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      corejs: false,
      helpers: true,
      regenerator: false,
      useESModules: true
    }]
  ]
} 