<script lang="ts">
  import {voidFunction} from "$lib/utils/voidFunction.js";
  import type {FormEventHandler, HTMLInputTypeAttribute} from "svelte/elements";
  import type {Store} from "effector";

  export let label = '';
  export let type: HTMLInputTypeAttribute = 'text';
  export let varinat: String | 'menu' | 'form-event';
  export let handler: FormEventHandler<HTMLInputElement> = voidFunction;
  export let valueStore: Store<string> | undefined = undefined;
  export let placeholder: string

  console.log('placeholder', placeholder)
</script>

<label class="input--box">
  <span>{label}</span>
  <input
    type={type}
    on:input={handler}
    value={placeholder ? '' : $valueStore}
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
      font-weight: 600;
    }

    &--box {
      display: block;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
    }

    &--menu {
      width: 150px;
      border-radius: 20px;
      border: 1px solid #EFEDED;
      font-size: 16px;
      font-weight: 600;
      color: #000;
      padding-left: 5px;

      &:placeholder-shown, &::placeholder {
      color: var(--primary-color);
      font-weight: 600;
    }
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
