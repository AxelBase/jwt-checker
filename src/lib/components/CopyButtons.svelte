<!-- src/lib/components/CopyButtons.svelte -->
<script lang="ts">
  import { reEncodeJwt } from '../utils/jwtParser.js';

  export let payload: any = null;
  export let raw: { header: string; payload: string; signature: string } | null = null;

  let copyPayloadText = 'Copy Payload';
  let copyJwtText = 'Copy Re-encoded JWT';

  async function copyToClipboard(text: string, button: 'payload' | 'jwt') {
    try {
      await navigator.clipboard.writeText(text);
      if (button === 'payload') copyPayloadText = 'Copied!';
      else copyJwtText = 'Copied!';
      setTimeout(() => {
        if (button === 'payload') copyPayloadText = 'Copy Payload';
        else copyJwtText = 'Copy Re-encoded JWT';
      }, 2000);
    } catch {
      alert('Failed to copy');
    }
  }
</script>

<div class="d-flex gap-2 mt-3">
  {#if payload}
    <button
      class="btn btn-outline-primary btn-sm"
      on:click={() => copyToClipboard(JSON.stringify(payload, null, 2), 'payload')}
    >
      {copyPayloadText}
    </button>
  {/if}
  {#if raw && payload}
    <button
      class="btn btn-outline-secondary btn-sm"
      on:click={() => copyToClipboard(reEncodeJwt(raw.header, payload, raw.signature), 'jwt')}
    >
      {copyJwtText}
    </button>
  {/if}
</div>