<!-- src/lib/components/ValidityBadge.svelte -->
<script lang="ts">
  export let status: 'valid' | 'expired' | 'not-yet-valid' | 'missing-claims' = 'missing-claims';
  export let message: string = '';
</script>

<div class="d-flex align-items-center gap-2">
  <span class="badge fs-6 {status === 'valid' ? 'bg-success' :
                          status === 'expired' ? 'bg-danger' :
                          status === 'not-yet-valid' ? 'bg-warning text-dark' :
                          'bg-secondary'}">
    {#if status === 'valid'}Valid{:else if status === 'expired'}Expired{:else if status === 'not-yet-valid'}Not Yet Valid{:else}Missing Claims{/if}
  </span>
  <small class="text-muted">{message}</small>
</div>