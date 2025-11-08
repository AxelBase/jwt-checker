<!-- src/routes/blog/posts/post2/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The Hidden Dangers of Expired JWTs | AxelBase</title>
  <meta name="description" content="Explore why expired JWTs are a silent security risk and how proper exp claim management prevents unauthorized access." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog/posts/post2" />

  <meta property="og:title" content="The Hidden Dangers of Expired JWTs | AxelBase" />
  <meta property="og:description" content="Learn how ignoring token lifetimes can lead to security breaches and how to fix it." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2025-11-08" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Hidden Dangers of Expired JWTs" />
  <meta name="twitter:description" content="Why ignoring exp is a silent security risk." />

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Hidden Dangers of Expired JWTs",
  "datePublished": "2025-11-08",
  "author": { "@type": "Organization", "name": "AxelBase" },
  "publisher": {
    "@type": "Organization",
    "name": "AxelBase",
    "logo": { "@type": "ImageObject", "url": "{base}/AxelLab-Logo.ico" }
  },
  "image": "{base}/og-image.jpg",
  "url": "https://axelbase.github.io/jwt-checker/blog/posts/post2",
  "description": "Explore why expired JWTs are a silent security risk and how proper exp claim management prevents unauthorized access."
}
</script>

</svelte:head>


<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Expired JWT Risks</p>
  </div>

  <article class="prose">
    <h1>The Hidden Dangers of Expired JWTs</h1>
    <p class="post-meta">Published: November 8, 2025</p>

    <p>
      You’ve implemented JWT authentication. You’re using HTTPS. You’re validating signatures. But are you <strong>actually checking the <code>exp</code> claim</strong>? Many developers assume “it just works” — until it doesn’t.
    </p>

    <p>
      An expired JWT is more than an inconvenience — it’s a <strong>security boundary</strong>. If your backend accepts a token past its expiration, you’re granting access to a user who should be logged out. This is how session hijacking persists long after a user closes their browser.
    </p>

    <h2>What Happens When exp Is Ignored?</h2>
    <p>Consider this scenario:</p>
    <ul>
      <li>User logs in → receives JWT with <code>exp: now + 1 hour</code></li>
      <li>User closes laptop, walks away</li>
      <li>Attacker steals the token from localStorage</li>
      <li>Even after 2 hours, the backend still accepts it</li>
    </ul>
    <p><strong>Result</strong>: The attacker has full access — indefinitely.</p>

    <h2>Common Mistakes</h2>
    <ul>
      <li><strong>No clock skew tolerance</strong>: Rejecting tokens 1 second after <code>exp</code> causes UX issues</li>
      <li><strong>Long-lived tokens</strong>: 24-hour or 7-day <code>exp</code> without refresh</li>
      <li><strong>Client-side only checks</strong>: Never trust the frontend to enforce expiration</li>
    </ul>

    <h2>Best Practices</h2>
    <p>Follow the <strong>short-lived token + refresh</strong> pattern:</p>
    <ul>
      <li>Set <code>exp</code> to <strong>15–60 minutes</strong></li>
      <li>Issue a refresh token (HTTP-only, secure cookie)</li>
      <li>Rotate refresh tokens on use</li>
      <li>Allow <strong>±30 seconds</strong> clock skew</li>
    </ul>

    <h2>How AxelBase Helps</h2>
    <p>
      Our <a href="{base}/" class="text-turquoise fw-semibold">JWT Checker Tool</a> instantly decodes <code>exp</code> and shows:
    </p>
    <ul>
      <li>Exact expiration in UTC and local time</li>
      <li>Live countdown timer</li>
      <li>Clear “Valid”, “Expired”, or “Not Yet Valid” badge</li>
    </ul>

    <p>
      Paste any token — even from production — and see if it’s safe to use. All processing happens in your browser. No logs. No risk.
    </p>

    <p class="italic-note">
      Expiration isn’t optional — it’s your last line of defense.
    </p>

    <p class="mt-5">
      <a href="{base}/" class="btn btn-outline-turquoise">Check Token Validity</a>
      <a href="{base}/blog/posts/post3" class="btn btn-link text-turquoise ms-3">Next: iat & exp Deep Dive</a>
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