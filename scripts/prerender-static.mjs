import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error("No index.html template found in dist directory. Build failed or dist folder missing. Exiting.");
  process.exit(1);
}

const templateHTML = fs.readFileSync(templatePath, 'utf8');

const foundersHTML = `
  <ul>
    <li><strong>Raj Vairam</strong> - Founder & CEO (Chief Builder) | Leads product architecture, AI systems, and company strategy at Antarva Collective. Combines software engineering, analytics, and grassroots agricultural systems design to build regenerative soil-to-market infrastructure. <a href="https://www.linkedin.com/in/raj-vairam-l-4649bb14a/">LinkedIn</a></li>
    <li><strong>Abu Thahir</strong> - Co-Founder & COO (Supply Side & Partner Wellness) | Leads farm-side operations, supply-chain architecture, and partner wellness. Focuses on resilient farm-to-market logistics, grower onboarding, and fair, sustained livelihoods for smallholder farmers. <a href="https://www.linkedin.com/in/abu-thahir-671a56226/">LinkedIn</a></li>
    <li><strong>Rustham Latheef</strong> - Co-Founder & Head of Growth (Consumer Side & User Wellness) | Leads consumer community buying, strategic partnerships, and user wellness. Drives apartment society onboarding, institutional demand, and transparent access to verified organic produce. <a href="https://www.linkedin.com/in/rusthamlatheef/">LinkedIn</a></li>
  </ul>
`;

const companyInfoHTML = `
  <p>Company: Antarva Collective Private Limited (CIN: U62011TN2026PTC193592), India</p>
  <p>Email: <a href="mailto:people@antarvacollective.com">people@antarvacollective.com</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/company/antarva-collective/">https://www.linkedin.com/company/antarva-collective/</a></p>
`;

const aboutContent = `
  <main>
    <h1>About Us & Founding Team</h1>
    <p>Antarva Collective Private Limited (Antarva Agri) is bringing the Farmers Market back digitally—connecting whole apartment societies directly to verified organic farmers, powered by farm intelligence AI.</p>
    <p>Mission: To transform the agri industry with technology, improving farmers' living conditions, processes, and earnings.</p>
    <p>Vision: A world where soil is healthy again, everyone eats healthier organic food, and farming moves away from chemicals and pesticides.</p>
    <h2>Founding Team</h2>
    ${foundersHTML}
    <h2>Get in Touch</h2>
    ${companyInfoHTML}
  </main>
`;

const indexContent = `
  <main>
    <h1>Antarva Collective Private Limited (Antarva Agri)</h1>
    <nav>
      <ul>
        <li><a href="/about">About Us</a></li>
      </ul>
    </nav>
    <p>Whole apartment societies buy verified organic produce directly from farmers—pre-sold before harvest and powered by farm intelligence AI.</p>
    <h2>Founding Team</h2>
    ${foundersHTML}
    <footer>
      ${companyInfoHTML}
    </footer>
  </main>
`;

function writePage(route, title, injectedContent) {
  const dir = path.join(distDir, route);
  if (route !== '' && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Set the proper title
  let html = templateHTML;
  const newTitleTag = `<title>${title}</title>`;
  
  if (html.includes('<title>')) {
    html = html.replace(/<title>.*?<\/title>/i, newTitleTag);
  } else {
    // Inject it in the head if not found
    html = html.replace('</head>', `  ${newTitleTag}\n</head>`);
  }

  // Inject content inside root
  html = html.replace(/<div\s+id=["']root["']\s*><\/div>/i, `<div id="root">${injectedContent}</div>`);
  
  const outputPath = route === '' ? path.join(distDir, 'index.html') : path.join(dir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`Pre-rendered static HTML for path: /${route}`);
}

// Generate the specific routes
writePage('about', 'About Us & Founding Team | Antarva Collective Private Limited', aboutContent);

// Overwrite index.html last to prevent recursive changes if templateHTML wasn't a separate copy
writePage('', 'Antarva Agri | The Farmers Market, Brought Back', indexContent);

console.log('Pre-rendering complete.');
