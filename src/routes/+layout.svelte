<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  const currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <!-- Core Meta -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Privacy-first JWT iat & exp checker. No data sent. 100% client-side." />
  <meta name="theme-color" content="#1abc9c" />

  <!-- Robots -->
  <meta name="robots" content="index, follow, max-snippet:-1" />

  <!-- Favicon & PWA -->
  <link rel="icon" href="{base}/AxelLab-Logo.ico" type="image/x-icon" />
  <link rel="manifest" href="{base}/manifest.json" />

  <!-- CSS -->
  <link rel="stylesheet" href="{base}/bootstrap.min.css" />
  <link rel="stylesheet" href="{base}/app.css" />

  <!-- Canonical (root fallback) -->
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/" />

  <!-- Social OG Defaults -->
  <meta property="og:image" content="{base}/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:image" content="{base}/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- JSON-LD: WebSite -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AxelBase JWT Checker",
    "url": "https://axelbase.github.io/jwt-checker/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://axelbase.github.io/jwt-checker/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>

  <!-- JSON-LD: Organization -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AxelBase",
    "url": "https://axelbase.github.io/jwt-checker/",
    "logo": "https://axelbase.github.io/jwt-checker/AxelLab-Logo.ico",
    "sameAs": ["https://github.com/axelbase/jwt-checker"],
    "description": "Privacy-first JWT tools. No data sent. 100% client-side."
  }
  </script>
</svelte:head>

<!-- ==================== HEADER ==================== -->
<header class="custom-navbar">
  <nav class="navbar-container" aria-label="Main navigation">
    <div class="navbar-brand-group">
      <a href="{base}/" class="navbar-brand-link" aria-label="AxelBase Home">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" width="32" height="32" />
      </a>
    </div>

    <ul class="nav-links">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to">How to Use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>

      <!-- Buy Me a Coffee Dropdown (File 1 style, adapted) -->
      <li class="bmac-nav-item" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button-file1"
          on:click|preventDefault={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown-file1" transition:fly={{ y: -10, duration: 250 }} role="menu">
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </li>
    </ul>
  </nav>
</header>

<!-- ==================== MAIN CONTENT ==================== -->
<main>
  <slot />
</main>

<!-- ==================== FOOTER ==================== -->
<footer class="custom-footer">
  <div class="container text-center">
    <p class="mb-0">
      © {currentYear} <strong>AxelBase JWT Checker</strong> —
      <a href="{base}/privacy" class="footer-link">Privacy Policy</a> |
      <a href="{base}/terms" class="footer-link">Terms & Conditions</a>
    </p>
  </div>
</footer>

<style>
  /* All existing File 2 styles from static/app.css remain unchanged */
  /* ... (your full app.css content here) ... */

  /* === Buy Me a Coffee Styles from File 1 (preserved & adapted to turquoise theme) === */
  .bmac-button-file1 {
    background: var(--turquoise);
    color: white;
    border: none;
    padding: 0.5rem 1.25rem; /* larger padding for pill feel */
    border-radius: 9999px; /* full pill shape */
    font-weight: 600;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(26,188,156,0.3);
  }

  .bmac-button-file1:hover {
    background: var(--turquoise-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26,188,156,0.4);
  }

  .bmac-button-file1 svg {
    width: 20px;
    height: 20px;
  }

  .bmac-dropdown-file1 {
    position: absolute;
    top: 100%;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0.75rem;
    width: 240px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow);
    overflow: hidden;
    z-index: 1000;
  }

  .bmac-dropdown-file1 a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown-file1 a:hover {
    background: rgba(26,188,156,0.1);
    color: var(--turquoise);
    padding-left: 28px;
  }

  .bmac-dropdown-file1 .amount {
    font-weight: 700;
    color: var(--turquoise);
    font-size: 1.1rem;
  }

  .bmac-dropdown-file1 .custom-amount {
    font-weight: 600;
    color: var(--turquoise);
    border-top: 1px solid var(--border);
    justify-content: center !important;
  }
</style>