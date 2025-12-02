/**
 * Vite plugin for adding cache control headers to generated assets
 * 
 * This plugin configures proper caching strategies for different asset types:
 * - Long-term caching for hashed assets (JS, CSS, images)
 * - Short-term caching for HTML and other non-hashed assets
 * - No caching for service worker files
 */

module.exports = function cachingPlugin() {
  return {
    name: 'vite-plugin-caching',
    configureServer(server) {
      // Add headers to dev server responses
      server.middlewares.use((req, res, next) => {
        // Add Cache-Control headers based on file type
        res.setHeader('Cache-Control', getCacheControlHeader(req.url));
        next();
      });
    },
    configurePreviewServer(server) {
      // Add headers to preview server responses
      server.middlewares.use((req, res, next) => {
        // Add Cache-Control headers based on file type
        res.setHeader('Cache-Control', getCacheControlHeader(req.url));
        next();
      });
    },
    generateBundle(options, bundle) {
      // Add _headers file for Netlify or similar hosting platforms
      const headers = [
        '# Cache control headers',
        '/*',
        '  X-Content-Type-Options: nosniff',
        '  X-Frame-Options: DENY',
        '  X-XSS-Protection: 1; mode=block',
        '  Referrer-Policy: strict-origin-when-cross-origin',
        '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
        '',
        '# HTML files - short cache',
        '/*.html',
        '  Cache-Control: public, max-age=0, must-revalidate',
        '',
        '# Favicon and manifest - medium cache',
        '/favicon.ico',
        '/manifest.webmanifest',
        '/site.webmanifest',
        '  Cache-Control: public, max-age=86400',
        '',
        '# Service worker - no cache',
        '/sw.js',
        '/workbox-*.js',
        '  Cache-Control: public, max-age=0, must-revalidate',
        '',
        '# Static assets with hash - long cache',
        '/*.js',
        '/*.css',
        '/*.woff2',
        '  Cache-Control: public, max-age=31536000, immutable',
        '',
        '# Images - long cache',
        '/assets/*.png',
        '/assets/*.jpg',
        '/assets/*.webp',
        '/assets/*.svg',
        '/assets/*.avif',
        '  Cache-Control: public, max-age=31536000, immutable',
        '',
      ].join('\n');

      // Add the _headers file to the bundle
      this.emitFile({
        type: 'asset',
        fileName: '_headers',
        source: headers
      });
    }
  };
}

/**
 * Get Cache-Control header value based on file path
 * @param {string} path - File path
 * @returns {string} - Cache-Control header value
 */
function getCacheControlHeader(path) {
  // HTML files - short cache
  if (path.endsWith('.html')) {
    return 'public, max-age=0, must-revalidate';
  }
  
  // Favicon and manifest - medium cache
  if (path.includes('favicon.ico') || path.includes('manifest')) {
    return 'public, max-age=86400';
  }
  
  // Service worker - no cache
  if (path.includes('sw.js') || path.includes('workbox-')) {
    return 'public, max-age=0, must-revalidate';
  }
  
  // JS and CSS files with hash - long cache
  if ((path.includes('.js') || path.includes('.css')) && path.includes('-')) {
    return 'public, max-age=31536000, immutable';
  }
  
  // Images - long cache
  if (path.match(/\.(png|jpg|jpeg|webp|svg|avif|gif)$/)) {
    return 'public, max-age=31536000, immutable';
  }
  
  // Fonts - long cache
  if (path.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    return 'public, max-age=31536000, immutable';
  }
  
  // Default - medium cache
  return 'public, max-age=3600';
}
