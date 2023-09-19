<script lang="ts">
  export let height: String
  export let size: String
  export let borderRadius: String
  export let variant: String | 'primary' | 'secondary' = 'primary';
  export let rounded: String | 'big-radius' | 'small-radius' = 'small-radius';
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
class:size
style={`--size:${size}; --height:${height}; --border-radius:${borderRadius}`}
on:click
on:focus
on:submit
>
  <slot />
</button>

<style lang="scss">
   button {
     --primary: #008585;
     --secondary: #fff;
     --primary-text: #fff;
     --secondary-text: #008585;
     --focus-ring: #857372;
	 --big-radius: 5rem;
	 --small-radius: 10px;
     cursor: pointer;
     padding: .5em, 1.5em;
     font-weight: bold;
     outline: 0;
     border: none;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.199);
     transition: box-shadow scale 100ms ease-in;

     display: inline-block;
   }
   button:hover,
	button:focus {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.199);
	}
	button:focus {
		border: 2px solid var(--focus-ring);
	}
    button.primary {
		background-color: var(--primary);
		color: var(--primary-text);
	}
    button.secondary {
		background-color: var(--secondary);
		color: var(--secondary-text);
	}
    button.outline {
		background-color: transparent !important;
	}
	button.outline.primary {
		color: var(--primary);
		border: 1px solid var(--primary);
	}
	button.outline.secondary {
		color: var(--secondary);
		border: 1px solid var(--secondary);
	}
    button.flat {
		box-shadow: none !important;
	}
	button.disabled {
		opacity: 0.3 !important;
		pointer-events: none;
	}
	button.disabled:hover {
		cursor: not-allowed !important;
	}
	button.rounded {
		--border-radius: var(--border-radius);
		border-radius: var(--border-radius)
	}
    button.size {
	  --size: var(--size);
      width: var(--size);
	  height: var(--height)
	}
</style>