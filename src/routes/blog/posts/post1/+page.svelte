<!-- src/routes/blog/posts/post1/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>JWT 101: Understanding Tokens in Modern Web | AxelBase</title>
  <meta name="description" content="Learn what JSON Web Tokens are, how they work, and why they’re essential for secure, stateless authentication in modern web apps." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog/posts/post1" />

  <!-- Open Graph -->
  <meta property="og:title" content="JWT 101: Understanding Tokens in Modern Web | AxelBase" />
  <meta property="og:description" content="A beginner-friendly guide to JSON Web Tokens: structure, use cases, and best practices for secure authentication." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AxelBase" />
  <meta property="article:published_time" content="2025-11-08" />
  <meta property="article:author" content="AxelBase" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="JWT 101: Understanding Tokens in Modern Web" />
  <meta name="twitter:description" content="Learn the basics of JWTs and how they power secure, scalable authentication." />

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JWT 101: Understanding Tokens in Modern Web",
  "datePublished": "2025-11-08",
  "author": {
    "@type": "Organization",
    "name": "AxelBase"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AxelBase",
    "logo": {
      "@type": "ImageObject",
      "url": "{base}/AxelLab-Logo.ico"
    }
  },
  "image": "{base}/og-image.jpg",
  "url": "https://axelbase.github.io/jwt-checker/blog/posts/post1",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://axelbase.github.io/jwt-checker/blog/posts/post1"
  },
  "description": "Learn what JSON Web Tokens are, how they work, and why they’re essential for secure, stateless authentication in modern web apps."
}
</script>

</svelte:head>

<!-- Article JSON-LD -->

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>JWT 101</p>
  </div>

  <article class="prose">
    <h1>JWT 101: Understanding Tokens in Modern Web</h1>
    <p class="post-meta">Published: November 8, 2025</p>

    <p>
      In today’s fast-paced web development world, <strong>JSON Web Tokens (JWTs)</strong> have become the gold standard for secure, stateless authentication. Whether you're building a React SPA, a mobile app, or a microservices architecture, chances are you're using — or should be using — JWTs.
    </p>

    <p>
      Unlike traditional session-based authentication, which relies on server-side storage, JWTs are <strong>self-contained</strong>. This means all the information needed to verify a user’s identity is encoded directly in the token itself. No database lookups. No session cookies. Just pure, scalable efficiency.
    </p>

    <h2>The Anatomy of a JWT</h2>
    <p>
      A JWT consists of three parts, separated by dots:
    </p>
    <ul>
      <li><strong>Header</strong>: Contains metadata like the signing algorithm (<code>HS256</code>, <code>RS256</code>)</li>
      <li><strong>Payload</strong>: Holds claims — data about the user and token, including <code>sub</code> (subject), <code>iat</code> (issued at), and <code>exp</code> (expiration)</li>
      <li><strong>Signature</strong>: Verifies the token hasn’t been tampered with</li>
    </ul>

    <p>
      When base64url-encoded and joined, they form something like:
      <br><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJpYXQiOjE3MzM2ODMyMDAsImV4cCI6MTczMzY4NjgwMH0.sig</code>
    </p>

    <h2>Why JWTs Matter</h2>
    <p>
      JWTs solve real problems:
    </p>
    <ul>
      <li><strong>Scalability</strong>: No session storage means horizontal scaling is trivial</li>
      <li><strong>Cross-domain support</strong>: Works seamlessly with CORS and CDNs</li>
      <li><strong>Mobile-ready</strong>: Compact and easy to send in headers</li>
      <li><strong>Decentralized</strong>: Microservices can validate tokens independently</li>
    </ul>

    <h2>Security Best Practices</h2>
    <p>
      While powerful, JWTs must be used correctly:
    </p>
    <ul>
      <li>Use <strong>HTTPS only</strong> to prevent token interception</li>
      <li>Set short expiration times (<code>exp</code>) and use refresh tokens</li>
      <li>Never store sensitive data in the payload — it’s only base64-encoded, not encrypted</li>
      <li>Validate <code>iat</code> to prevent replay attacks</li>
    </ul>

    <h2>Try It Yourself</h2>
    <p>
      Want to see how JWTs work in practice? Paste any token into our <a href="{base}/" class="text-turquoise fw-semibold">JWT Checker Tool</a> — it decodes <code>iat</code> and <code>exp</code> instantly, 100% in your browser. No data sent. No tracking.
    </p>

    <p class="italic-note">
      JWTs are simple, powerful, and privacy-respecting — when used right.
    </p>

    <!-- Internal Links -->
    <p class="mt-5">
      <a href="{base}/" class="btn btn-outline-turquoise">Test a JWT Now</a>
      <a href="{base}/blog" class="btn btn-link text-turquoise ms-3">More JWT Guides</a>
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