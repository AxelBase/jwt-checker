<!-- src/routes/blog/posts/post6/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Common JWT Misconfigurations You’re Probably Making | AxelBase</title>
  <meta name="description" content="Avoid these 7 critical JWT mistakes that expose your app to attacks — from weak secrets to missing validation." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog/posts/post6" />

  <meta property="og:title" content="Common JWT Misconfigurations You’re Probably Making | AxelBase" />
  <meta property="og:description" content="Real-world pitfalls and how to fix them before they become breaches." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2025-11-08" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="7 JWT Misconfigurations to Avoid" />
  <meta name="twitter:description" content="Fix these before they become security breaches." />

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Common JWT Misconfigurations You’re Probably Making",
  "datePublished": "2025-11-08",
  "author": { "@type": "Organization", "name": "AxelBase" },
  "publisher": {
    "@type": "Organization",
    "name": "AxelBase",
    "logo": { "@type": "ImageObject", "url": "{base}/AxelLab-Logo.ico" }
  },
  "image": "{base}/og-image.jpg",
  "url": "https://axelbase.github.io/jwt-checker/blog/posts/post6",
  "description": "Avoid these 7 critical JWT mistakes that expose your app to attacks — from weak secrets to missing validation."
}
</script>

</svelte:head>


<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>JWT Misconfigurations</p>
  </div>

  <article class="prose">
    <h1>Common JWT Misconfigurations You’re Probably Making</h1>
    <p class="post-meta">Published: November 8, 2025</p>

    <p>
      JWTs are secure by design — but <strong>only if configured correctly</strong>. Here are 7 mistakes we see in production every week.
    </p>

    <h2>1. Using Weak Secrets</h2>
    <p><code>secret: "123456"</code> → cracked in seconds.</p>
    <p><strong>Fix</strong>: Use 256-bit random keys. Generate with:<br><code>openssl rand -base64 32</code></p>

    <h2>2. No Algorithm Validation</h2>
    <p>Attacker changes <code>alg: "none"</code> → bypasses signature.</p>
    <p><strong>Fix</strong>: Explicitly allow only <code>HS256</code> or <code>RS256</code>.</p>

    <h2>3. Long-Lived Tokens</h2>
    <p><code>exp: now + 30 days</code> → stolen token = 30 days of access.</p>
    <p><strong>Fix</strong>: Max 1 hour. Use refresh tokens.</p>

    <h2>4. Missing iat Check</h2>
    <p>Attacker reuses old token after password reset.</p>
    <p><strong>Fix</strong>: Reject tokens older than last login.</p>

    <h2>5. Storing JWTs in localStorage</h2>
    <p>XSS → token theft.</p>
    <p><strong>Fix</strong>: Use <code>httpOnly</code> cookies for auth tokens.</p>

    <h2>6. No Audience/Scope</h2>
    <p>Token for API A used on API B.</p>
    <p><strong>Fix</strong>: Validate <code>aud</code> and <code>scope</code>.</p>

    <h2>7. Ignoring Clock Skew</h2>
    <p>Token rejected 2 seconds after <code>exp</code>.</p>
    <p><strong>Fix</strong>: Allow ±30 seconds tolerance.</p>

    <h2>How to Audit Your Setup</h2>
    <p>
      Use <a href="{base}/" class="text-turquoise fw-semibold">AxelBase JWT Checker</a> to:
    </p>
    <ul>
      <li>Spot missing <code>iat</code>/<code>exp</code></li>
      <li>Test expiration edge cases</li>
      <li>Verify payload structure</li>
    </ul>
    <p>Paste your token. See red flags instantly.</p>

    <p class="italic-note">
      Secure JWTs aren’t hard — avoid the easy mistakes.
    </p>

    <p class="mt-5">
      <a href="{base}/" class="btn btn-outline-turquoise">Audit Your JWT Now</a>
      <a href="{base}/blog/posts/post7" class="btn btn-link text-turquoise ms-3">Next: Privacy-First Tools</a>
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