<script>
  // import { onMount } from 'svelte/types/runtime/internal/lifecycle'; 
  import Button from './button.svelte';
  import { isPopupOpenStore, togglePopup } from '$lib/logic/showPopup';
   
  function toggle() {
    togglePopup(true)
    console.log('toggled')
  }
</script>

<footer class="footer">
  <Button
  size='large'
  on:click = {() => toggle()}
  >
    Меню
  </Button>
  <p>hello im footer</p>
</footer>

<style>
  .footer {
    width: 340px;
    height: 48px;
    display: grid;
    grid-template-columns: 80px 1fr 2px;

  }
</style>