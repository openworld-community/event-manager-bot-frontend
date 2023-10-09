<script lang="ts">
  import type { ButtonVariant, ButtonRounded } from '$lib/types/enums';

  export let height: string;
  export let width: string;
  export let borderRadius: string;
  export let variant: ButtonVariant;
  export let rounded: ButtonRounded;
  export let outline = false;
  export let flat = false;
  export let disabled = false;
</script>

<button
  class={`button ${variant}`}
  class:outline
  class:flat
  class:disabled
  class:rounded
  class:width
  style={`
   --width:${width};
   --height:${height};
   --border-radius:${borderRadius}
 `}
 on:click
>
  <slot />
</button>

<style lang="scss">
  .button {
    --primary: #008585;
    --secondary: #fff;
    --primary-text: #fff;
    --secondary-text: #008585;
    --focus-ring: #857372;
    --big-radius: 5rem;
    --small-radius: 10px;
    cursor: pointer;
    padding: 0.5em, 1.5em;
    font-weight: bold;
    outline: 0;
    border: none;

    display: inline-block;
  }
  button:hover,
  button:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.199);
  }
  button:focus {
    border: 2px solid var(--focus-ring);
  }
  .primary {
    background-color: var(--primary);
    color: var(--primary-text);
  }
  .secondary {
    background-color: var(--secondary);
    color: var(--secondary-text);
  }

  .primary, .secondary {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.199);
    transition: box-shadow scale 100ms ease-in;
  }

  .none {
    background-color: transparent;
    border: none;
    cursor: pointer;
	outline: none;
	background: none;
    padding: 0;

	&:focus, &:hover {
		box-shadow: none;
		border: none;
	}
  }
  .outline {
    background-color: transparent;
  }
  .outline.primary {
    color: var(--primary);
    border: 1px solid var(--primary);
  }
  .outline.secondary {
    color: var(--secondary);
    border: 1px solid var(--secondary);
  }
  .flat {
    box-shadow: none;
  }
  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  .disabled:hover {
    cursor: not-allowed;
  }
  .rounded {
    border-radius: var(--border-radius);
  }
  .width {
    width: var(--width);
    height: var(--height);
  }
</style>
