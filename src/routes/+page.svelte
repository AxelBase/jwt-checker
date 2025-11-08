<!-- src/routes/+page.svelte -->
<script lang="ts">
  import JWTInput from '$lib/components/JWTInput.svelte';
  import TimeDisplay from '$lib/components/TimeDisplay.svelte';
  import ValidityBadge from '$lib/components/ValidityBadge.svelte';
  import CopyButtons from '$lib/components/CopyButtons.svelte';
  import { parseJwt, getValidityStatus } from '$lib/utils/jwtParser.js';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let jwt: string = '';
  let result = { payload: null, error: null, raw: null };
  let validity = { status: 'missing-claims', message: '' };
  let now = Date.now();

  $: result = parseJwt(jwt);
  $: validity = getValidityStatus(result.payload, now);

  function handleInput(event: CustomEvent<string>) {
    jwt = event.detail;
  }

  function handleClear() {
    jwt = '';
    result = { payload: null, error: null, raw: null };
    validity = { status: 'missing-claims', message: '' };
  }

  onMount(() => {
    const interval = setInterval(() => now = Date.now(), 1000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>JWT Checker Tool – Free, Privacy-First Decoder | AxelBase</title>
  <meta name="description" content="Decode JWTs instantly – check iat/exp validity, no data sent. Free, open-source tool for secure inspection. Try now!" />
  <meta name="robots" content="index, follow, max-snippet:-1" />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/" />

  <!-- Open Graph -->
  <meta property="og:title" content="JWT Checker Tool – Free, Privacy-First Decoder" />
  <meta property="og:description" content="100% client-side. No tracking. Paste your JWT and inspect iat/exp instantly." />
  <meta property="og:url" content="https://axelbase.github.io/jwt-checker/" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:title" content="JWT Checker Tool – Free & Privacy-First" />
  <meta name="twitter:description" content="Inspect JWT iat/exp in your browser. No data sent. Try now!" />
</svelte:head>

<main class="container py-5 flex-grow-1">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <!-- HERO TOOL -->
      <section class="mb-5">
        <h1 class="display-5 fw-bold text-center mb-4 text-turquoise">JWT Expiry & Issued-At Checker</h1>
        <div class="card shadow-sm border-0">
          <div class="card-body p-4">
            <JWTInput bind:value={jwt} error={result.error} on:input={handleInput} on:clear={handleClear} />
            {#if !result.error && result.payload}
              <hr class="my-4" />
              <TimeDisplay label="Issued At (iat)" unixSeconds={result.payload.iat} />
              <TimeDisplay label="Expires At (exp)" unixSeconds={result.payload.exp} />
              <ValidityBadge status={validity.status} message={validity.message} />
              <CopyButtons payload={result.payload} raw={result.raw} />
            {:else if result.error}
              <div class="alert alert-danger mt-3">{result.error}</div>
            {:else if jwt === ''}
              <div class="text-center text-muted mt-3">
                <small>Paste a JWT to begin</small>
              </div>
            {/if}
            <div class="mt-4 text-center text-muted small">
              This tool does <strong>not</strong> verify signatures. For inspection only.
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section id="about" class="mb-5">
        <h2 class="h3 fw-bold text-turquoise mb-4">About AxelBase JWT Checker</h2>
        <div class="prose">
          <p>
            <strong>AxelBase JWT Checker</strong> is a <em>privacy-first, open-source web tool</em> designed for developers, security engineers, and DevOps teams to instantly inspect JSON Web Tokens (JWTs) — with a focus on the <code>iat</code> (issued at) and <code>exp</code> (expiration) claims.
          </p>

          <p>
            Unlike traditional online JWT decoders that send your token to remote servers, <strong>AxelBase runs 100% in your browser</strong>. This means:
          </p>
          <ul>
            <li><strong>No data transmission</strong>: Your JWT never leaves your device</li>
            <li><strong>No logging or tracking</strong>: Zero analytics, cookies, or beacons</li>
            <li><strong>Offline capable</strong>: Works without internet after first load</li>
            <li><strong>Open source</strong>: Fully auditable on <a href="https://github.com/axelbase/jwt-checker" target="_blank" rel="noopener" class="text-turquoise fw-semibold">GitHub</a></li>
          </ul>

          <p>
            Built with <strong>SvelteKit</strong> and <strong>Bootstrap</strong>, the tool uses pure client-side JavaScript to:
          </p>
          <ul>
            <li>Split the token into header, payload, and signature</li>
            <li>Base64URL-decode the payload</li>
            <li>Parse <code>iat</code> and <code>exp</code> as Unix timestamps</li>
            <li>Compare against current time with live updates</li>
          </ul>

          <p>
            The result? A <strong>real-time validity badge</strong> (Valid, Expired, Not Yet Valid) and human-readable timestamps in both UTC and local time.
          </p>

          <p>
            Whether you're debugging authentication flows, testing token lifetimes, or teaching JWT concepts, AxelBase delivers <strong>instant, secure, and transparent inspection</strong>.
          </p>

          <p>
            <em>Why trust a third party with your tokens when you don’t have to?</em>
          </p>

          <p>
            The tool is part of the broader <strong>AxelBase suite</strong> of privacy-focused developer utilities — all designed with the principle: <strong>your data, your control</strong>.
          </p>

          <p>
            We believe in <strong>zero-knowledge tooling</strong>: powerful functionality without compromising privacy. That’s why every operation — from decoding to re-encoding — happens locally in your browser’s memory.
          </p>

          <p>
            Join thousands of developers who use AxelBase to inspect tokens safely. <a href="{base}/blog" class="text-turquoise fw-semibold">Read our blog</a> for deep dives into JWT security, best practices, and real-world use cases.
          </p>

          <p class="italic-note text-center mt-4">
            <strong>Privacy isn’t optional. It’s built in.</strong>
          </p>
        </div>
      </section>

      <!-- HOW TO USE -->
      <section id="how-to" class="mb-5">
        <h2 class="h3 fw-bold text-turquoise mb-4">How to Use</h2>
        <div class="prose">
          <p>
            Using the <strong>AxelBase JWT Checker</strong> is simple and requires no setup. Follow these steps to inspect any JWT in seconds:
          </p>

          <h3 class="h5 mt-4">Step 1: Paste Your JWT</h3>
          <p>
            Copy any JWT from your application — whether from <code>Authorization: Bearer</code> headers, localStorage, or logs — and paste it into the large text area at the top of the page.
          </p>
          <p>
            <strong>Pro tip</strong>: The tool supports multi-line input and automatically trims whitespace.
          </p>

          <h3 class="h5 mt-4">Step 2: Instant Decoding</h3>
          <p>
            As soon as you paste a valid JWT, the tool:
          </p>
          <ul>
            <li>Parses the three parts: <code>header.payload.signature</code></li>
            <li>Decodes the payload using <code>atob()</code> and <code>JSON.parse()</code></li>
            <li>Extracts <code>iat</code> and <code>exp</code> claims</li>
            <li>Converts Unix timestamps to human-readable dates</li>
          </ul>

          <h3 class="h5 mt-4">Step 3: View Results</h3>
          <p>
            You’ll see:
          </p>
          <ul>
            <li><strong>Issued At (iat)</strong>: When the token was created (UTC + Local)</li>
            <li><strong>Expires At (exp)</strong>: When access ends</li>
            <li><strong>Validity Badge</strong>: Green (Valid), Red (Expired), Yellow (Not Yet Valid)</li>
            <li><strong>Live Countdown</strong>: Updates every second</li>
          </ul>

          <h3 class="h5 mt-4">Step 4: Copy or Re-encode</h3>
          <p>
            Use the buttons to:
          </p>
          <ul>
            <li><strong>Copy Payload</strong>: Get the decoded JSON</li>
            <li><strong>Copy Re-encoded JWT</strong>: Modify claims and get a new token (signature preserved)</li>
          </ul>

          <h3 class="h5 mt-4">Advanced Testing</h3>
          <p>
            Generate test tokens directly in the browser:
          </p>
          <pre><code>{`// In DevTools Console
const makeTest = (offset) => {
  const now = Math.floor(Date.now() / 1000);
  return btoa(JSON.stringify({ iat: now + offset, exp: now + offset + 3600 }))
    .replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
};

// Valid in 1h
console.log("Valid:", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + makeTest(0) + ".sig");

// Expired
console.log("Expired:", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + makeTest(-7200) + ".sig");

// Future
console.log("Future:", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + makeTest(3600) + ".sig");
`}</code></pre>

          <p>
            Paste the output into the tool to test edge cases.
          </p>

          <h3 class="h5 mt-4">Common Workflows</h3>
          <ul>
            <li><strong>Debugging 401s</strong>: Check if <code>exp</code> passed</li>
            <li><strong>Testing Refresh Logic</strong>: Simulate expired tokens</li>
            <li><strong>Teaching JWTs</strong>: Visualize claims in real time</li>
          </ul>

          <p>
            The tool is <strong>stateless</strong> — clear the input anytime with the “Clear” button.
          </p>

          <p class="italic-note text-center mt-4">
            <strong>Inspect fast. Stay secure. No backend needed.</strong>
          </p>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="mb-5">
        <h2 class="h3 fw-bold text-turquoise mb-4">Frequently Asked Questions</h2>
        <div class="prose">
          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">Does this tool verify JWT signatures?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              <strong>No.</strong> This tool is for <em>inspection only</em>. It decodes the payload but does <strong>not validate the signature</strong>. Signature verification requires the secret or public key and must be done on the server.
            </p>
          </details>

          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">Is my JWT sent to a server?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              <strong>Never.</strong> All processing happens in your browser using JavaScript. Open the Network tab in DevTools — you’ll see <strong>zero outgoing requests</strong> when pasting a token.
            </p>
          </details>

          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">Can I use this in production?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              Yes, for <strong>inspection and debugging</strong>. Never use client-side decoding to grant access. Always validate <code>exp</code>, <code>iat</code>, and signature on the backend.
            </p>
          </details>

          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">What if my token has custom claims?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              All claims are displayed in the copied payload. The tool highlights <code>iat</code> and <code>exp</code> but shows <strong>every field</strong> in the JSON.
            </p>
          </details>

          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">Why does it show “Not Yet Valid”?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              The current time is <strong>before</strong> the <code>iat</code> claim. This can happen with clock skew or pre-issued tokens. Allow ±30 seconds tolerance in production.
            </p>
          </details>

          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">Can I host this myself?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              Yes! It’s <strong>open source</strong>. Clone from <a href="https://github.com/axelbase/jwt-checker" target="_blank" rel="noopener" class="text-turquoise fw-semibold">GitHub</a>, run <code>npm run build</code>, and deploy to any static host.
            </p>
          </details>

          <details class="mb-3 p-3 border rounded bg-light">
            <summary class="fw-semibold text-turquoise cursor-pointer">Is there a dark mode?</summary>
            <p class="mt-3 ps-4 border-start border-turquoise" style="border-left-width: 3px;">
              Yes! The tool respects your system preference (<code>prefers-color-scheme</code>). Light and dark modes switch automatically.
            </p>
          </details>

          <p class="italic-note text-center mt-4">
            <strong>Still have questions? Check our <a href="{base}/blog" class="text-turquoise fw-semibold">Blog</a> or open an issue on GitHub.</strong>
          </p>
        </div>
      </section>

    </div>
  </div>
</main>

<style>
  .text-turquoise { color: var(--turquoise); }
  .prose { line-height: 1.8; font-size: 1.05rem; }
  .prose code { 
    background: rgba(26,188,156,0.1); 
    padding: 0.2em 0.4em; 
    border-radius: 4px; 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 0.9em;
  }
  .prose pre { 
    background: #f8f9fa; 
    padding: 1rem; 
    border-radius: 8px; 
    overflow-x: auto; 
    margin: 1.5rem 0;
    border: 1px solid #dee2e6;
  }
  .prose pre code { 
    background: none; 
    padding: 0; 
    font-size: 0.875em;
  }
  .prose details { 
    background: rgba(26,188,156,0.05); 
    transition: background 0.2s; 
    border: 1px solid rgba(26,188,156,0.2);
  }
  .prose details[open] { 
    background: var(--card-bg); 
    box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
  }
  .prose summary { 
    cursor: pointer; 
    list-style: none;
  }
  .prose summary::before { 
    content: '+'; 
    margin-right: 0.75rem; 
    font-weight: bold; 
    color: var(--turquoise); 
    display: inline-block;
    width: 1.2em;
  }
  .prose details[open] summary::before { 
    content: '−'; 
  }
  .italic-note { 
    font-style: italic; 
    color: var(--text-secondary); 
  }
</style>