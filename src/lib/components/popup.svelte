<script lang="ts">
  import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";
  import type { PopupVariant } from "$lib/types/enums";

  export let showPopup = false;
  export let variant: PopupVariant

</script>

<div 
class={`popup-outer ${showPopup ? 'active' : 'nonactive'}`}
on:close = {() => togglePopup(false)}
on:click
on:keydown
>
  <div class={`popup`}
   style="--variant: {variant}"
  >
    <div
      class={`popup-header`}
      style="--variant: {variant}"
    >
      <p
      on:click = {() => togglePopup(false)}
      on:keydown
      style="color: #008585; font-size: 1.2rem; cursor: pointer"
      >Отмена</p>
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
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: opacity 500ms;
      z-index: 1;
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
      padding-bottom: 2px;
      border-radius: 1rem;
      width: 340px;
      transition: all 5s ease-in-out;
      z-index: 10;

      display: flex;
      flex-flow: column nowrap;

      --primary-bg-color: #EFEDED;
      --secondary-bg-color: #E5E5E5;
    }

    .popup-header {
      height: 3rem;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      gap: 20px;
      // margin-bottom: 5px;

      background: inherit;

      &[style*="--variant: primary"] {
        background-color: var(--secondary-bg-color);
      }
      &[style*="--variant: secondary"] {
        background-color:var(--primary-bg-color);
      }
    }

    .popup-body {
      background: inherit;
    }
  
    .popup[style*="--variant: primary"] {
    background-color: var(--primary-bg-color);
    }

  .popup[style*="--variant: secondary"] {
  background-color: var(--secondary-bg-color);
}
</style>