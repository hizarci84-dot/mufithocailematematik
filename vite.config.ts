import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Windows'ta klasör adındaki Türkçe 'İ' harfinin (WEBSİTEM) JS toLowerCase()
 * sırasında 2 karakter uzunluğa ('i\u0307') dönüşmesi sebebiyle Vite/Rollup'ın
 * index.html dosya adından ilk harfi kesmesini ('ndex.html') önler.
 */
function fixUnicodeRootIndexHtml(): Plugin {
  return {
    name: 'fix-unicode-root-index-html',
    enforce: 'post',
    generateBundle(_options, bundle) {
      if (bundle['ndex.html'] && !bundle['index.html']) {
        const entry = bundle['ndex.html'];
        entry.fileName = 'index.html';
        bundle['index.html'] = entry;
        delete bundle['ndex.html'];
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), fixUnicodeRootIndexHtml()],
});
