/**
 * Post-build step: write an HTML entry for every route so that direct links
 * and page refreshes work on ANY static host (Cloudflare Pages/Workers, Vercel,
 * Netlify, cPanel…) without special rewrite rules.
 *   dist/about.html, dist/about/index.html, … and dist/404.html
 */
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PATHS } from "../src/routes/paths.js";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const index = join(dist, "index.html");

for (const path of Object.values(PATHS)) {
  if (path === "/") continue;
  const name = path.replace(/^\//, "");
  copyFileSync(index, join(dist, `${name}.html`));
  mkdirSync(join(dist, name), { recursive: true });
  copyFileSync(index, join(dist, name, "index.html"));
}
copyFileSync(index, join(dist, "404.html"));
console.log(`✓ SPA entries written for ${Object.keys(PATHS).length - 1} routes + 404.html`);
