<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase JWT Checker</title>
  <meta name="description" content="AxelBase processes all JWTs 100% client-side. No data is sent, logged, or stored. Zero tracking. Full privacy by design." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/privacy.html" />

  <!-- Open Graph -->
  <meta property="og:title" content="Privacy Policy | AxelBase JWT Checker" />
  <meta property="og:description" content="No servers. No logs. Your JWT never leaves your browser." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/privacy.html" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Privacy Policy | AxelBase" />
  <meta name="twitter:description" content="100% client-side JWT checker. Zero data transmission." />
</svelte:head>
<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 8, 2025</p>

    <p>
      At <strong>AxelBase</strong>, your privacy is not a feature — it’s the foundation. The <strong>JWT Checker</strong> is a <em>zero-knowledge web tool</em> that processes <strong>all data exclusively in your browser</strong>. We do not collect, store, transmit, or log any information — ever.
    </p>

    <h2>1. What We Do NOT Collect</h2>
    <p>
      This tool is engineered for <strong>absolute data isolation</strong>. We never receive:
    </p>
    <ul>
      <li><strong>JWT Tokens</strong>: Any token you paste is decoded using <code>atob()</code> and <code>JSON.parse()</code> — entirely on your device.</li>
      <li><strong>Personal Data</strong>: No names, emails, IP addresses, or device identifiers.</li>
      <li><strong>Usage Analytics</strong>: No Google Analytics, no cookies, no pixels, no beacons.</li>
      <li><strong>Network Requests</strong>: Open DevTools → Network tab → paste a token → <strong>zero outgoing traffic</strong>.</li>
    </ul>

    <h2>2. How the Tool Works (Client-Side Only)</h2>
    <p>
      When you use the JWT Checker:
    </p>
    <ul>
      <li><strong>Input</strong>: You paste a JWT into a <code>&lt;textarea&gt;</code>.</li>
      <li><strong>Processing</strong>: JavaScript splits the token, base64-decodes the payload, and parses <code>iat</code> and <code>exp</code> — all in memory.</li>
      <li><strong>Output</strong>: Results are rendered directly in the DOM. No <code>fetch()</code>, no WebSocket, no storage.</li>
      <li><strong>Export</strong>: “Copy Re-encoded JWT” uses <code>navigator.clipboard</code> — still local.</li>
    </ul>
    <p>
      <em>Your browser is the server.</em>
    </p>

    <h2>3. No Third-Party Services</h2>
    <p>
      We do not integrate with:
    </p>
    <ul>
      <li>Analytics platforms</li>
      <li>Advertising networks</li>
      <li>CDNs with tracking</li>
      <li>Social media widgets</li>
    </ul>
    <p>
      All assets (CSS, JS, fonts) are either <strong>self-hosted</strong> or loaded from privacy-respecting CDNs.
    </p>

    <h2>4. Cookies & Local Storage</h2>
    <p>
      <strong>No cookies.</strong> No <code>localStorage</code> persistence. Your input is cleared on page reload or when you click “Clear”.
    </p>

    <h2>5. Security Responsibility</h2>
    <p>
      While we don’t handle your data, we recommend:
    </p>
    <ul>
      <li>Use the tool in a secure browser (HTTPS only)</li>
      <li>Avoid pasting production tokens in public environments</li>
      <li>Keep your OS and browser updated</li>
    </ul>

    <h2>6. Children's Privacy</h2>
    <p>
      This tool is not directed at children under 13. We do not knowingly process data from minors.
    </p>

    <h2>7. Global Compliance</h2>
    <p>
      Because <strong>no data is collected</strong>, we comply by default with:
    </p>
    <ul>
      <li><strong>GDPR</strong> (EU)</li>
      <li><strong>CCPA/CPRA</strong> (California)</li>
      <li><strong>LGPD</strong> (Brazil)</li>
      <li><strong>PIPEDA</strong> (Canada)</li>
    </ul>

    <h2>8. Updates to This Policy</h2>
    <p>
      We may revise this policy. Changes will be posted here with the updated effective date.
    </p>

    <h2>9. Contact</h2>
    <p>
      Questions? Reach out via our <a href="https://github.com/axelbase/jwt-checker" target="_blank" rel="noopener" class="text-turquoise fw-semibold">GitHub repository</a>.
    </p>

    <p class="italic-note">
      <strong>Your tokens. Your browser. Your privacy. Guaranteed.</strong>
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