<script>
  // import { onMount } from 'svelte/types/runtime/internal/lifecycle'; 
  import Button from './button.svelte';
  import { isPopupOpenStore, togglePopup } from '$lib/logic/showPopup';
   
  function toggle() {
    togglePopup(true)
  }
</script>

<footer class="footer">
  <div class="footer--menu-btn-box">
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
  </div>
  <p>hello im footer</p>

</footer>

<style lang="scss">
  .footer {
    width: 340px;
    height: 48px;
    display: grid;
    grid-template-columns: 80px 1fr 2px;

    &--menu-btn-box {
      margin-top: 14px;
    }

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