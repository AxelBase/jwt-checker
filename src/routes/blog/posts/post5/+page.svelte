<!-- src/routes/blog/posts/post5/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How to Generate Test JWTs (Without a Backend) | AxelBase</title>
  <meta name="description" content="Learn 3 easy ways to create valid, expired, or future-dated JWTs for testing — no server required." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog/posts/post5" />

  <meta property="og:title" content="How to Generate Test JWTs (Without a Backend) | AxelBase" />
  <meta property="og:description" content="Step-by-step guide to crafting JWTs for development and debugging." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2025-11-08" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Generate Test JWTs – No Backend" />
  <meta name="twitter:description" content="Create valid, expired, or future tokens instantly." />

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Generate Test JWTs (Without a Backend)",
  "datePublished": "2025-11-08",
  "author": { "@type": "Organization", "name": "AxelBase" },
  "publisher": {
    "@type": "Organization",
    "name": "AxelBase",
    "logo": { "@type": "ImageObject", "url": "{base}/AxelLab-Logo.ico" }
  },
  "image": "{base}/og-image.jpg",
  "url": "https://axelbase.github.io/jwt-checker/blog/posts/post5",
  "description": "Learn 3 easy ways to create valid, expired, or future-dated JWTs for testing — no server required."
}
</script>

</svelte:head>


<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Generate Test JWTs</p>
  </div>

  <article class="prose">
    <h1>How to Generate Test JWTs (Without a Backend)</h1>
    <p class="post-meta">Published: November 8, 2025</p>

    <p>
      Need a valid JWT for testing? Don’t spin up a Node.js server. Don’t hardcode secrets. Here are <strong>three zero-setup methods</strong> to generate tokens instantly.
    </p>

    <h2>Method 1: Online JWT Generators (Use with Caution)</h2>
    <p>
      Tools like <a href="https://jwt.io" target="_blank" rel="noopener" class="text-turquoise">jwt.io</a> let you:
    </p>
    <ul>
      <li>Edit header and payload</li>
      <li>Set <code>iat</code> and <code>exp</code></li>
      <li>Sign with HS256 (use <code>secret</code> as key)</li>
    </ul>
    <p><strong>Warning</strong>: Never paste real tokens. Use dummy data.</p>

    <h2>Method 2: Browser Console (100% Local)</h2>
    <p>Open DevTools and run:</p>
    <pre><code>{`function makeJwt(claims) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
    .replace(/=/g,'').replace(/\\+/g,'-').replace(/\\//g,'_');
  const payload = btoa(JSON.stringify(claims))
    .replace(/=/g,'').replace(/\\+/g,'-').replace(/\\//g,'_');
  return \`\${header}.\${payload}.sig\`;
}

// Valid (expires in 1 hour)
console.log(makeJwt({
  sub: "test",
  iat: Math.floor(Date.now()/1000),
  exp: Math.floor(Date.now()/1000) + 3600
}));`}</code></pre>

    <p>
      Copy the output → paste into <a href="{base}/" class="text-turquoise fw-semibold">AxelBase Checker</a>.
    </p>

    <h2>Method 3: AxelBase + Copy Re-encode</h2>
    <p>The smartest way:</p>
    <ol>
      <li>Paste any JWT into <a href="{base}/" class="text-turquoise fw-semibold">AxelBase</a></li>
      <li>Edit the decoded payload (e.g., change <code>exp</code>)</li>
      <li>Click <strong>“Copy Re-encoded JWT”</strong></li>
      <li>Use the new token instantly</li>
    </ol>
    <p>No external tools. No risk. Full control.</p>

    <h2>Pre-Made Test Tokens</h2>
    <p>Here are three ready-to-use examples:</p>
    <ul>
      <li><strong>Valid</strong>: <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjI1NjAwMDAsImV4cCI6MTc2MjU2MzYwMH0.sig</code></li>
      <li><strong>Expired</strong>: <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzM2ODMyMDAsImV4cCI6MTczMzY4NjgwMH0.sig</code></li>
      <li><strong>Future</strong>: <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3OTk5OTk5OTksImV4cCI6MTgwMDAwMDAwMH0.sig</code></li>
    </ul>
    <p>Paste any into our tool — see the status change live.</p>

    <h2>Pro Tip</h2>
    <p>Use <code>iat: now - 600</code> and <code>exp: now + 3600</code> for realistic testing.</p>

    <p class="italic-note">
      Test fast. Stay secure. No backend needed.
    </p>

    <p class="mt-5">
      <a href="{base}/" class="btn btn-outline-turquoise">Generate Test Token Now</a>
      <a href="{base}/blog/posts/post6" class="btn btn-link text-turquoise ms-3">Next: Common JWT Mistakes</a>
    </p>
  </article>
</div>

<style>
  .prose pre {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    border: 1px solid #dee2e6;
    margin: 1.5rem 0;
    font-size: 0.875em;
  }
  .prose pre code {
    background: none;
    padding: 0;
    font-family: 'JetBrains Mono', monospace;
    color: #212529;
  }
  .prose code {
    background: rgba(26,188,156,0.1);
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9em;
  }
  .text-turquoise { color: var(--turquoise); }
  .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }

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