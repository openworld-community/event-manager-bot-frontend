<script lang="ts">
  import { togglePopup } from "$lib/logic/showPopup";
  import type { PopupVariant } from "$lib/types/enums";


  export let isPopupShown = false;
  export let variant: PopupVariant

  const handleEscClose = () => {
     document.addEventListener("keydown", (event) => {
       if (event.key === 'Escape') {
        togglePopup(false)
       }
     })
  }
</script>

<div 
class='popup-outer'
class:active={isPopupShown}
class:disabled={!isPopupShown}
on:close = {() => togglePopup(false)}
on:click 
on:keydown = {() => handleEscClose}
>
  <div class={`popup ${variant}`}

  >
    <div
      class={`popup-header ${variant}`}
    >
      <span
      on:click = {() => togglePopup(false)}
      on:keydown
      class='popup-header_exit'
      >Отмена</span>
      <p 
      style="font-size: 1.2rem;"
      >PeredelanoCo</p>
    </div>
    <div class={`popup-body`}
    >
      <slot name="content" />
    </div>
  </div>
</div>

<style lang="scss">
    .popup-outer {
      position: relative;
      transition: opacity 500ms;
      z-index: 1;
    }
    
    .popup-outer.disabled {
      opacity: 0;
      z-index: -1;
    }

    .popup-outer.active {
      opacity: 1;
      z-index: 10;
    }

    .popup {

      position: absolute;
      margin: 2px auto;
      padding-bottom: 2px;
      border-radius: 1rem;
      width: 340px;
      transition: all 5s ease-in-out;
      z-index: 10;

      display: flex;
      flex-flow: column nowrap;

      --primary-bg-color: #EFEDED;
      --secondary-bg-color: #E5E5E5;

      &.primary {
       .popup-header {
         background-color: var(--secondary-bg-color);
       }

       .popup-body {
         background-color: var(--primary-bg-color);
       }
      }

      &.secondary {
       .popup-header {
         background-color: var(--primary-bg-color);
       }

       .popup-body {
        background-color: var(--secondary-bg-color);
       }
      }
    }

    .popup-header {
      height: 3rem;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;

      background: inherit;

      &_exit {
        color: #008585;
        font-size: 1.2rem; 
        cursor: pointer
      }
    }

    .popup-body {
      background-color: inherit;
    }
</style>