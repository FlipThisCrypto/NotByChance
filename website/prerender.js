import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';

const routes = ['/', '/mission', '/resources', '/board', '/impact', '/get-involved'];
const distDir = resolve(import.meta.dirname, 'dist');

async function prerender() {
  // Serve the built dist folder
  const { exec } = await import('child_process');
  const { default: handler } = await import('serve-handler');
  const http = await import('http');

  const server = http.createServer((req, res) => {
    return handler(req, res, {
      public: distDir,
      rewrites: [{ source: '**', destination: '/index.html' }]
    });
  });

  await new Promise(resolve => server.listen(3456, resolve));
  console.log('Preview server running on http://localhost:3456');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:3456${route}`, { waitUntil: 'networkidle0' });

    const html = await page.content();
    const filePath = route === '/'
      ? resolve(distDir, 'index.html')
      : resolve(distDir, route.slice(1), 'index.html');

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, `<!DOCTYPE html>${html.replace(/^<!DOCTYPE html>/i, '')}`);
    console.log(`✅ Pre-rendered: ${route} → ${filePath}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('✅ All pages pre-rendered!');
}

prerender().catch(err => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
