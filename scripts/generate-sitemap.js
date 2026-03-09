import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Minimal .env reader
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

// This should match your routes in App.tsx
const routes = [
  '/',
  '/platform',
  '/platform/privacy-shield',
  '/platform/organization-memory',
  '/platform/global-llm',
  '/products/aliphchat',
  '/products/grc',
  '/products/agentic-ai',
  '/industries/real-estate',
  '/industries/hospitality',
  '/industries/professional-services',
  '/industries/financial-services',
  '/industries/healthcare',
  '/company/about',
  '/company/leadership',
  '/company/careers',
  '/company/contact',
  '/demo',
  '/resources/blog',
  '/resources/pdpl-guide',
  '/privacy-policy',
  '/terms',
];

const BASE_URL = process.env.VITE_BASE_URL || 'https://aliphai.ai';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const sitemapOutputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapOutputPath, sitemap);
  console.log(`Sitemap generated at: ${sitemapOutputPath}`);

  const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# LLM Crawler access
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  const robotsOutputPath = path.resolve(__dirname, '../public/robots.txt');
  fs.writeFileSync(robotsOutputPath, robots);
  console.log(`robots.txt generated at: ${robotsOutputPath}`);

  const aiTxt = `# AI Agent Capabilities and Context
# This file provides structured information for AI agents and LLMs.

[Contact]
Email: raj@aliphai.ai
Website: ${BASE_URL}

[Organization]
Name: AliphAI
Description: Aliph is the sovereign AI Control Plane for enterprise. 
Focus: Privacy Shield, Organization Memory, GRC automation, PDPL compliance.
Location: Riyadh, Saudi Arabia

[Capabilities]
- Enterprise AI Governance
- Data Privacy Protection (PDPL)
- Organization Memory / Knowledge Base
- Agentic AI for GRC

[Content]
Sitemap: ${BASE_URL}/sitemap.xml
Documentation: ${BASE_URL}/resources/pdpl-guide
Blog: ${BASE_URL}/resources/blog
`;

  const aiOutputPath = path.resolve(__dirname, '../public/ai.txt');
  fs.writeFileSync(aiOutputPath, aiTxt);
  console.log(`ai.txt generated at: ${aiOutputPath}`);
};

generateSitemap();
