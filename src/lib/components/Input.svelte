<script lang="ts">
  import {voidFunction} from "$lib/utils/voidFunction.js";
  import type {FormEventHandler, HTMLInputTypeAttribute} from "svelte/elements";
  import type {Store} from "effector";
  import {timeZones} from "$lib/utils/timeZones";

  export let label = '';
  export let type: HTMLInputTypeAttribute = 'text';
  export let handler: FormEventHandler<HTMLInputElement> = voidFunction;
  export let valueStore: Store<string> | undefined = undefined;
</script>

<label>
  <span>{label}</span>
  {#if type === 'select'}
    <select
      bind:value={$valueStore}
      on:change={handler}
    >
      {#each timeZones as zone}
        <option value={zone}>{zone}</option>
      {/each}
    </select>
  {:else}
    <input
      type={type}
      on:input={handler}
      value={$valueStore}
    />
  {/if}
</label>
