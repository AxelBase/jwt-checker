<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | AxelBase JWT Checker</title>
  <meta name="description" content="Terms of use for AxelBase JWT Checker. Open source, free, and privacy-first. No warranty. Use at your own risk." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/terms.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="Terms & Conditions | AxelBase JWT Checker" />
  <meta property="og:description" content="Free, open-source JWT tool. No liability. Use responsibly." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/terms.html" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Terms & Conditions | AxelBase" />
  <meta name="twitter:description" content="Open source. No warranty. Privacy-first." />
</svelte:head>
<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Effective Date: November 8, 2025</p>

    <p>
      Welcome to the <strong>AxelBase JWT Checker</strong> ("the Tool"), a free, open-source, client-side web application. By using this Tool, you agree to these Terms & Conditions. If you do not agree, please do not use the Tool.
    </p>

    <h2>1. Nature of the Tool</h2>
    <p>
      The JWT Checker is a <strong>diagnostic utility</strong> that:
    </p>
    <ul>
      <li>Decodes JWT headers and payloads</li>
      <li>Validates <code>iat</code> and <code>exp</code> claims</li>
      <li>Provides copy/re-encode functionality</li>
    </ul>
    <p>
      <strong>It does NOT verify signatures</strong> and is <em>not intended for authentication or authorization</em>.
    </p>

    <h2>2. License & Usage</h2>
    <p>
      The Tool is released under the <strong>MIT License</strong>. You may:
    </p>
    <ul>
      <li>Use it freely for personal or commercial purposes</li>
      <li>Modify, fork, or redistribute the source code</li>
      <li>Host your own instance</li>
    </ul>
    <p>
      Source: <a href="https://github.com/axelbase/jwt-checker" target="_blank" rel="noopener" class="text-turquoise fw-semibold">github.com/axelbase/jwt-checker</a>
    </p>

    <h2>3. No Warranty</h2>
    <p>
      The Tool is provided <strong>"AS IS"</strong> without warranties of any kind, including:
    </p>
    <ul>
      <li>Accuracy of decoding</li>
      <li>Suitability for security testing</li>
      <li>Availability or uptime</li>
    </ul>
    <p>
      We are not liable for any damages arising from use or inability to use the Tool.
    </p>

    <h2>4. Prohibited Uses</h2>
    <p>
      You may not:
    </p>
    <ul>
      <li>Use the Tool to bypass authentication systems</li>
      <li>Attempt to probe, scan, or test vulnerabilities of any system without permission</li>
      <li>Distribute malicious or altered versions</li>
      <li>Claim endorsement by AxelBase</li>
    </ul>

    <h2>5. Intellectual Property</h2>
    <p>
      The Tool’s code, design, and documentation are owned by <strong>AxelBase</strong> and licensed under MIT. The name “AxelBase” and the logo are trademarks. You may not use them in a way that implies official affiliation without permission.
    </p>

    <h2>6. Limitation of Liability</h2>
    <p>
      In no event shall AxelBase, its contributors, or affiliates be liable for:
    </p>
    <ul>
      <li>Direct, indirect, incidental, or consequential damages</li>
      <li>Loss of data, profits, or business opportunities</li>
      <li>Security breaches resulting from misuse</li>
    </ul>

    <h2>7. Third-Party Links</h2>
    <p>
      The Tool may link to external sites (e.g., GitHub, jwt.io). We are not responsible for their content or privacy practices.
    </p>

    <h2>8. Governing Law</h2>
    <p>
      These Terms are governed by the laws of <strong>the jurisdiction of the project maintainer</strong>, without regard to conflict of law principles.
    </p>

    <h2>9. Changes to Terms</h2>
    <p>
      We may update these Terms at any time. Continued use constitutes acceptance.
    </p>

    <h2>10. Contact & Contributions</h2>
    <p>
      We welcome contributions! Open issues or PRs on <a href="https://github.com/axelbase/jwt-checker" target="_blank" rel="noopener" class="text-turquoise fw-semibold">GitHub</a>.
    </p>

    <p class="italic-note">
      <strong>Use responsibly. Code openly. Stay secure.</strong>
    </p>
  </article>
</div>

<style>
/* === LEGAL PAGES (Privacy, Terms) === */
.post-layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}
.breadcrumbs a {
  color: var(--accent-secondary);
  text-decoration: none;
}
.breadcrumbs a:hover {
  text-decoration: underline;
}
.breadcrumbs p {
  margin: 0;
  color: var(--text-primary);
}

.prose {
  line-height: 1.8;
  color: var(--text-primary);
}
.prose .post-meta {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}
.prose h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--accent-secondary);
}
.prose h2 {
  color: var(--accent-secondary);
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--secondary-bg);
  padding-bottom: 0.5rem;
}
.prose ul {
  list-style-type: '→ ';
  padding-left: 1.5rem;
  color: var(--text-primary);
}
.prose ul li::marker {
  color: var(--accent-primary);
}
.prose ul li {
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
}
.prose code {
  background: rgba(26, 188, 156, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  color: var(--text-primary);
}
.prose .italic-note {
  font-style: italic;
  color: var(--text-secondary);
  text-align: center;
  margin-top: 3rem;
}
.text-turquoise { color: var(--turquoise); }
.fw-semibold { font-weight: 600; }
</style>