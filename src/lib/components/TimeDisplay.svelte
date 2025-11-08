<!-- src/lib/components/TimeDisplay.svelte -->
<script lang="ts">
  export let label: string;
  export let unixSeconds: number | undefined;

  // Reactive formatting using the store
  $: formattedUTC = unixSeconds ? $formatTimestampStore(unixSeconds, 'utc') : '—';
  $: formattedLocal = unixSeconds ? $formatTimestampStore(unixSeconds, 'local') : '—';
</script>

<div class="mb-3">
  <h6 class="fw-bold text-primary">{label}</h6>
  <div class="ms-3">
    <div><strong>UTC:</strong> <span class="font-monospace">{formattedUTC}</span></div>
    <div><strong>Local:</strong> <span class="font-monospace">{formattedLocal}</span></div>
  </div>
</div>

<!-- Module context: define the store once -->
<script context="module" lang="ts">
  import { writable } from 'svelte/store';
  import { formatTimestamp } from '../utils/jwtParser.js';

  // Expose the formatter via a store
  export const formatTimestampStore = writable(formatTimestamp);
</script>