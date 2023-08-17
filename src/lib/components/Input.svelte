<script lang="ts">
  import {voidFunction} from "$lib/utils/voidFunction.js";
  import type {FormEventHandler, HTMLInputTypeAttribute} from "svelte/elements";
  import type {Store} from "effector";

  export let label = '';
  export let type: HTMLInputTypeAttribute = 'text';
  export let handler: FormEventHandler<HTMLInputElement> = voidFunction;
  export let valueStore: Store<string> | undefined = undefined;
</script>

<label>
  <span>{label}</span>
  <input
    type={type}
    on:input={handler}
    value={$valueStore}
  />
</label>

