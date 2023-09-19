<script>
  // import { onMount } from 'svelte/types/runtime/internal/lifecycle'; 
  import Button from './button.svelte';
  import { isPopupOpenStore, togglePopup } from '$lib/logic/showPopup';
  import Input from './Input.svelte';
   
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
  <Input 
  varinat="menu"
  placeholder="message"
  />

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