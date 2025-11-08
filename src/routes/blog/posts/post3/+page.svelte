<!-- src/routes/blog/posts/post3/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Decoding iat & exp: What They Really Mean | AxelBase</title>
  <meta name="description" content="Deep dive into JWT iat and exp claims: how they work, why they matter, and how to validate them securely." />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog/posts/post3" />

  <meta property="og:title" content="Decoding iat & exp: What They Really Mean | AxelBase" />
  <meta property="og:description" content="Understand issued-at and expiration claims with real examples and security insights." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content="2025-11-08" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Decoding iat & exp: What They Really Mean" />
  <meta name="twitter:description" content="Master JWT time claims for secure authentication." />

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Decoding iat & exp: What They Really Mean",
  "datePublished": "2025-11-08",
  "author": { "@type": "Organization", "name": "AxelBase" },
  "publisher": {
    "@type": "Organization",
    "name": "AxelBase",
    "logo": { "@type": "ImageObject", "url": "{base}/AxelLab-Logo.ico" }
  },
  "image": "{base}/og-image.jpg",
  "url": "https://axelbase.github.io/jwt-checker/blog/posts/post3",
  "description": "Deep dive into JWT iat and exp claims: how they work, why they matter, and how to validate them securely."
}
</script>

</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>iat & exp Explained</p>
  </div>

  <article class="prose">
    <h1>Decoding iat & exp: What They Really Mean</h1>
    <p class="post-meta">Published: November 8, 2025</p>

    <p>
      The <code>iat</code> (issued at) and <code>exp</code> (expiration) claims are the <strong>temporal backbone</strong> of any JWT. While often overlooked, they are critical for security, auditing, and user experience.
    </p>

    <h2>The iat Claim: When Was This Token Born?</h2>
    <p>
      The <code>iat</code> claim is a Unix timestamp (seconds since epoch) indicating when the token was issued.
    </p>
    <p>
      Example: <code>"iat": 1733683200</code> → <strong>2025-11-08 12:00:00 UTC</strong>
    </p>

    <h3>Why iat Matters</h3>
    <ul>
      <li><strong>Replay attack prevention</strong>: Reject tokens issued before a known compromise</li>
      <li><strong>Auditing</strong>: Know exactly when a user logged in</li>
      <li><strong>Clock drift detection</strong>: Compare with server time</li>
    </ul>

    <h2>The exp Claim: When Does Access End?</h2>
    <p>
      The <code>exp</code> claim defines the exact moment a token becomes invalid.
    </p>
    <p>
      Example: <code>"exp": 1733686800</code> → <strong>2025-11-08 13:00:00 UTC</strong>
    </p>

    <h3>Critical Validation Rules</h3>
    <div class="validation-rules" role="list" aria-label="Critical validation rules for tokens">
      <div class="rule" role="listitem">
        <div class="condition"><code>current_time &gt;= exp</code></div>
        <div class="arrow">→</div>
        <div class="status reject"><strong>Reject</strong></div>
      </div>
      <div class="rule" role="listitem">
        <div class="condition"><code>current_time &lt; iat</code></div>
        <div class="arrow">→</div>
        <div class="status warn"><strong>Future token</strong> (possible spoofing)</div>
      </div>
      <div class="rule" role="listitem">
        <div class="condition"><code>exp - iat &gt; 24 hours</code></div>
        <div class="arrow">→</div>
        <div class="status warn"><strong>Too long</strong></div>
      </div>
    </div>

    <h2>Real-World Example</h2>
    <p>A banking app issues a JWT with:</p>
    <ul>
      <li><code>iat: now</code></li>
      <li><code>exp: now + 15 minutes</code></li>
    </ul>
    <p>
      After 16 minutes, the token is rejected — even if the user is active. This forces re-authentication for sensitive actions.
    </p>

    <h2>Test Your Tokens</h2>
    <p>
      Use our <a href="{base}/" class="text-turquoise fw-semibold">JWT Checker Tool</a> to:
    </p>
    <ul>
      <li>See <code>iat</code> and <code>exp</code> in human-readable format</li>
      <li>Get instant validity status</li>
      <li>Copy decoded payload for debugging</li>
    </ul>

    <p>
      All in-browser. Zero trust. Full control.
    </p>

    <p class="italic-note">
      Time is security. Master iat and exp — master JWT safety.
    </p>

    <p class="mt-5">
      <a href="{base}/" class="btn btn-outline-turquoise">Inspect iat & exp Now</a>
      <a href="{base}/blog/posts/post1" class="btn btn-link text-turquoise ms-3">Back to JWT 101</a>
    </p>
  </article>
</div>

<style>
  /* Keep existing page styling intact; add focused enhancements for the validation rules */
  .validation-rules {
    margin: 0.75rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02));
    padding: 0.65rem;
    border-radius: 8px;
    border: 1px solid rgba(120, 130, 140, 0.08);
  }

  .validation-rules .rule {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.45rem;
    border-radius: 6px;
    transition: background 120ms ease;
  }

  .validation-rules .rule:hover {
    background: rgba(0,0,0,0.02);
  }

  .validation-rules .condition {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace;
    background: rgba(8, 12, 16, 0.03);
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    color: #083344;
    white-space: nowrap;
    font-size: 0.97rem;
  }

  .validation-rules .arrow {
    color: rgba(8, 51, 68, 0.6);
    font-weight: 600;
    margin-left: 0.25rem;
  }

  .validation-rules .status {
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    font-size: 0.95rem;
    display: inline-block;
  }

  .validation-rules .status.reject {
    background: rgba(220, 38, 38, 0.08);
    color: #b91c1c;
    border: 1px solid rgba(220, 38, 38, 0.12);
  }

  .validation-rules .status.warn {
    background: rgba(245, 158, 11, 0.06);
    color: #92400e;
    border: 1px solid rgba(245, 158, 11, 0.10);
  }

  /* Small screens: keep layout tidy */
  @media (max-width: 640px) {
    .validation-rules .rule {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .validation-rules .arrow {
      margin-left: 0;
    }
  }

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
