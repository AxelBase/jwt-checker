<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10] as const;
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

      <!-- Buy Me a Coffee Dropdown -->
      <li class="bmac-nav-item" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button"
          on:click|preventDefault={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
          </svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }} role="menu">
            {#each donationAmounts as amount}
              <a
                href="https://paypal.me/{paypalUsername}/{amount}"
                target="_blank"
                rel="noopener noreferrer"
                class="bmac-link"
                on:click={closeDropdown}
                role="menuitem"
              >
                ${amount}
              </a>
            {/each}
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