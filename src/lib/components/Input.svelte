<script lang="ts">
  import {voidFunction} from "$lib/utils/voidFunction.js";
  import type {FormEventHandler, HTMLInputTypeAttribute} from "svelte/elements";
  import type {Store} from "effector";

  export let label = '';
  export let type: HTMLInputTypeAttribute = 'text';
  export let varinat: String | 'menu' | 'form-event';
  export let placeholder: string = ''
  export let handler: FormEventHandler<HTMLInputElement> = voidFunction;
  export let valueStore: Store<string> | undefined = undefined;
</script>

<label class="input--box">
  <span>{label}</span>
  <input
    type={type}
    on:input={handler}
    value={$valueStore}
    class={`input input--${varinat}`}
    placeholder={placeholder}
  />
</label>

<style lang="scss">
  .input {
    display: inline-block;
    font-size: 22px;
    padding: 3px 2px;

    &::placeholder {
      color: #FAFAFA;
    }

    &--box {
      display: block;
    }

    &--menu {
      width: 150px;
      border-radius: 20px;
      border: 1px solid #EFEDED;
    }

    &--form-event {
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #EFEDED;
      &:active, &:focus {
        outline: 3px var(--primary-green);
        border: 1px solid var(--secondary-green);
      }
    }

    &:active, &:focus {
      outline: none;
    }
  }
</style>
