<script>
  import {onMount} from 'svelte'
  import Button from './button.svelte';
  import { isPopupOpenStore, togglePopup } from '$lib/logic/showPopup';
  let container;
   
  function toggle() {
    let isOpen = isPopupOpenStore.getState()
    togglePopup(!isOpen)
  }

  const fetchVersion = (async () => {
    const response = await fetch('')
  })
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