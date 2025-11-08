<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value: string = '';
  export let error: string | null = null;

  const dispatch = createEventDispatcher<{
    input: string;
    clear: void;
  }>();

  function handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    value = target.value.trim();
    dispatch('input', value);  // Pass value as detail
  }

  function handlePaste(e: ClipboardEvent) {
    setTimeout(() => {
      const target = e.target as HTMLTextAreaElement;
      value = target.value.trim();
      dispatch('input', value);
    }, 0);
  }

  function clear() {
    value = '';
    dispatch('clear');
  }
</script>

<div class="mb-3 position-relative">
  <label for="jwt-input" class="form-label fw-bold">Paste your JWT</label>
  <div class="input-group">
    <textarea
      id="jwt-input"
      class="form-control {error ? 'is-invalid' : ''}"
      rows="4"
      placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      bind:value
      on:input={handleInput}
      on:paste={handlePaste}
      spellcheck={false}
      autocomplete="off"
    ></textarea>
    {#if value}
      <button class="btn btn-outline-secondary" type="button" on:click={clear} title="Clear">
        Clear
      </button>
    {/if}
  </div>
  {#if error}
    <div class="invalid-feedback">{error}</div>
  {/if}
  <div class="form-text">Your token is processed only in your browser — never sent anywhere.</div>
</div>

<style>
  textarea {
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    resize: vertical;
  }
  .input-group .btn {
    z-index: 3;
  }
</style>