<!-- src/routes/blog/posts/post7/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy-First Tools: Why AxelBase Never Sends Your Token | AxelBase</title>
  <meta name="description" content="Explore zero-knowledge design: how AxelBase processes JWTs entirely in your browser with no data transmission." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog/posts/post7" />

  <meta property="og:title" content="Privacy-First Tools: Why AxelBase Never Sends Your Token | AxelBase" />
  <meta property="og:description" content="A deep dive into client-side processing and why it’s the future of secure dev tools." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2025-11-08" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Why AxelBase Never Sends Your JWT" />
  <meta name="twitter:description" content="Zero-knowledge JWT inspection — 100% in your browser." />

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Privacy-First Tools: Why AxelBase Never Sends Your Token",
  "datePublished": "2025-11-08",
  "author": { "@type": "Organization", "name": "AxelBase" },
  "publisher": {
    "@type": "Organization",
    "name": "AxelBase",
    "logo": { "@type": "ImageObject", "url": "{base}/AxelLab-Logo.ico" }
  },
  "image": "{base}/og-image.jpg",
  "url": "https://axelbase.github.io/jwt-checker/blog/posts/post7",
  "description": "Explore zero-knowledge design: how AxelBase processes JWTs entirely in your browser with no data transmission."
}
</script>

</svelte:head>


<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Privacy-First Design</p>
  </div>

  <article class="prose">
    <h1>Privacy-First Tools: Why AxelBase Never Sends Your Token</h1>
    <p class="post-meta">Published: November 8, 2025</p>

    <p>
      You paste a JWT. You expect it to be decoded. But where does it go? With most online tools — <strong>to their server</strong>. With AxelBase — <strong>nowhere</strong>.
    </p>

    <p>Welcome to <strong>zero-knowledge web apps</strong>.</p>

    <h2>How It Works</h2>
    <p>When you use <a href="{base}/" class="text-turquoise fw-semibold">AxelBase JWT Checker</a>:</p>
    <ul>
      <li>All decoding happens in your browser</li>
      <li>Base64 → JSON → DOM updates</li>
      <li>No <code>fetch()</code>, no beacons, no logs</li>
      <li>Works offline</li>
    </ul>
    <p>Open DevTools → Network tab → paste a token → <strong>zero requests</strong>.</p>

    <h2>Why This Matters</h2>
    <p>JWTs often contain:</p>
    <ul>
      <li>User IDs</li>
      <li>Email addresses</li>
      <li>Roles and permissions</li>
      <li>Session metadata</li>
    </ul>
    <p>Sending this to a third party — even encrypted — is a privacy risk.</p>

    <h2>Zero-Knowledge = Trustless</h2>
    <p>You don’t need to trust us. The code is open. The logic is transparent. Your data never leaves your machine.</p>

    <h2>Technical Implementation</h2>
    <ul>
      <li><strong>SvelteKit</strong>: Static adapter → pure HTML/JS</li>
      <li><strong>No backend</strong>: No API routes, no database</li>
      <li><strong>Client-side only</strong>: All logic in <code>jwtParser.ts</code></li>
      <li><strong>Prerendered</strong>: Fast, SEO-friendly, CDN-ready</li>
    </ul>

    <h2>Use Cases</h2>
    <p>Perfect for:</p>
    <ul>
      <li>Inspecting production tokens</li>
      <li>Compliance audits</li>
      <li>Security training</li>
      <li>Offline debugging</li>
    </ul>

    <h2>Join the Movement</h2>
    <p>
      Privacy isn’t a feature — it’s a requirement. AxelBase is open source. Fork it. Audit it. Improve it.
    </p>
    <p>
      <a href="https://github.com/axelbase/jwt-checker" target="_blank" rel="noopener" class="text-turquoise fw-semibold">GitHub</a>
    </p>

    <p class="italic-note">
      Your data. Your browser. Your control.
    </p>

    <p class="mt-5">
      <a href="{base}/" class="btn btn-outline-turquoise">Try AxelBase Now</a>
      <a href="{base}/privacy" class="btn btn-link text-turquoise ms-3">Read Privacy Policy</a>
    </p>
  </article>
</div>

<style>
  /* === BLOG POST STYLES === */
.post-layout {
  max-width: 800px;
  padding-top: 2rem;
  padding-bottom: 4rem;
  margin: 0 auto;
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
.prose h1, .prose h2{
  color: var(--accent-secondary);
  margin-top: 2.5rem;
}
.prose h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.prose h2 {
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
.text-turquoise {
  color: var(--turquoise);
}
.fw-semibold {
  font-weight: 600;
}
</style>