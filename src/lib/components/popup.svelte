<script lang="ts">
  import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";

  export let showPopup: Boolean = false;
  export let variant: String = 'menu-popup'

  function toggle() {
    togglePopup(false)
    console.log(isPopupOpenStore.getState())
  }
</script>

<div 
class={`popup-outer ${showPopup ? 'active' : 'nonactive'}`}
on:close = {() => toggle()}
on:click
on:keydown
>
  <div class={`popup ${variant}`}>
    <div class="popup-header">
      <p
      on:click = {() => toggle()}
      on:keydown
      style="color: #008585; font-size: 1.2rem; cursor: pointer"
      >Отмена</p>
      <p 
      style="font-size: 1.2rem;"
      >PeredelanoCo</p>
    </div>
    <div class="popup-body">
      <slot name="content" />
    </div>
  </div>
</div>

<style>
    .popup-outer {
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: opacity 500ms;
      z-index: 1;

      margin-top: 30px;
    }
    
    .popup-outer.nonactive {
      opacity: 0;
    }

    .popup-outer.active {
      opacity: 1;
    }

    .popup {
      position: absolute;
      margin: 2px auto;
      padding: 10px;
      border-radius: 1rem;
      width: 320px;
      transition: all 5s ease-in-out;
      border-radius: 3px solid red;
      z-index: 10;

      display: flex;
      flex-flow: column nowrap;
    }

    .popup-header {
      height: 3rem;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;
      margin-bottom: 5px;
    }

    .menu-popup {
      background: #E5E5E5;
    }
</style>