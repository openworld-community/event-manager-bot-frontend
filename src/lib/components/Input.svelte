<script lang="ts">
  import {voidFunction} from "$lib/utils/voidFunction.js";
  import type {FormEventHandler, HTMLInputTypeAttribute} from "svelte/elements";
  import type {Store} from "effector";
  import type { FormSteps, InputVariant } from "$lib/types/enums";

  type InputLabel = boolean | string;

  export let label: InputLabel = '';
  export let type: HTMLInputTypeAttribute = 'text';
  export let variant: InputVariant;
  export let handler: FormEventHandler<HTMLInputElement> = voidFunction;
  export let valueStore: Store<string> | undefined = undefined;
  export let placeholder = ''
  export let step: FormSteps | undefined
</script>

<label class="input--box">
  <span>{label}</span>
  <input
    type={type}
    on:input={handler}
    value={placeholder ? '' : $valueStore}
    class={`input input--${variant}`}
    autocomplete={$valueStore}
    step={step}
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
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;

      width: fit-content;
    }

    &--menu {
      width: 150px;
      border-radius: 20px;
      border: 1px solid #EFEDED;
      font-size: 16px;
      padding-left: 5px;

      &:placeholder-shown, 
      &::placeholder {
      color: var(--primary-color);
      font-weight: 600;
    }
    }

    &--form-event-big, &--form-event-small {
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #EFEDED;
      &:active, &:focus {
        outline: 3px var(--primary-elements-color);
        border: 1px solid var(--secondary-elements-color);
      }
    }

    &--form-event-big {
      width: 320px;
    }

    &--form-event-small {
      width: 130px;
    }

    &:active, &:focus {
      outline: none;
    }
  }

</style>
