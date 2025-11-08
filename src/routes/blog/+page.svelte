<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'JWT 101: Understanding Tokens in Modern Web', description: 'Beginner-friendly intro to JWT structure and use cases.' },
    { href: '/blog/posts/post2', title: 'The Hidden Dangers of Expired JWTs', description: 'Why ignoring exp leads to security risks.' },
    { href: '/blog/posts/post3', title: 'Decoding iat & exp: What They Really Mean', description: 'Deep dive with real-world examples.' },
    { href: '/blog/posts/post4', title: 'Client-Side vs Server-Side JWT Validation', description: 'Why this tool runs 100% in-browser.' },
    { href: '/blog/posts/post5', title: 'How to Generate Test JWTs (Without a Backend)', description: 'Create valid/expired tokens for testing.' },
    { href: '/blog/posts/post6', title: 'Common JWT Misconfigurations', description: 'Avoid weak algorithms and clock skew issues.' },
    { href: '/blog/posts/post7', title: 'Privacy-First Tools: Why AxelBase Never Sends Your Token', description: 'Zero-knowledge design explained.' }
  ];
</script>

<svelte:head>
  <title>JWT Insights Blog | AxelBase</title>
  <meta name="description" content="In-depth JWT security, best practices, and privacy-first tooling from AxelBase. 100% client-side." />
  <link rel="canonical" href="https://axelbase.github.io/jwt-checker/blog" />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="blog-header text-center mb-5">
    <h1 class="display-5 fw-bold text-turquoise mb-3">AxelBase JWT Insights</h1>
    <p class="lead text-muted col-lg-8 mx-auto">
      Expert guides and tips for JWT security — all <strong>100% client-side</strong>.
    </p>
    <p>
      <a href="{base}/" class="text-turquoise fw-semibold">Test your JWT now</a>
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="post-card card h-100 text-decoration-none shadow-sm border-0 overflow-hidden">
          <div class="card-body d-flex flex-column p-4">
            <h3 class="post-title h5 fw-bold text-turquoise mb-2">{post.title}</h3>
            <p class="post-description text-muted small flex-grow-1 mb-3">{post.description}</p>
            <span class="read-more text-turquoise fw-semibold small d-inline-flex align-items-center">Read Article</span>
          </div>
          <div class="card-hover-effect"></div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: calc(100vh - 12rem);
  }

  .text-turquoise {
    color: var(--turquoise) !important;
  }

  .post-card {
    background: var(--card-bg);
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(26, 188, 156, 0.15) !important;
  }

  .post-card:hover .read-more {
    transform: translateX(6px);
  }

  .post-card:hover .card-hover-effect {
    transform: scale(1.1);
    opacity: 0.1;
  }

  .card-hover-effect {
    position: absolute;
    inset: 0;
    background: var(--turquoise);
    transition: all 0.4s ease;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
  }

  .read-more {
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .display-5 {
      font-size: 2.2rem;
    }
  }
</style>