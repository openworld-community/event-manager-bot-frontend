<script>
  // import { onMount } from 'svelte/types/runtime/internal/lifecycle'; 
  import Button from './button.svelte';
  import Input from './Input.svelte';
  import { isPopupOpenStore, togglePopup } from '$lib/logic/showPopup';
  import { updateMenuInput, menuInput } from '$lib/logic/editMenuInput';

  menuInput.watch(message => {
    console.log(message)
  })

  function toggle() {
    togglePopup(true)
  }
</script>

<footer class="footer">
    <Button
    size='60px'
    height='30px'
    borderRadius='12px'
    on:click = {() => toggle()}
    >
    <div class="footer--menu-button">
      <p>X</p>
      <p>Меню</p>
    </div>
    </Button>
    <form>
      <Input 
      varinat="menu"
      placeholder = 'message'
      handler = {(e) => updateMenuInput(e.currentTarget.value)}
      valueStore = {menuInput}
      />
      <Button
      height='fit-content'
      size='fit-content'
      borderRadius='5px'
      variant = 'none'
      >
      ^
      |
      </Button>
    </form>
</footer>

<style lang="scss">
  .footer {
    width: 340px;
    height: 48px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background-color: --primary-color;

    &--menu-button {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 5px;

      height: inherit;
    }
  }
</style>