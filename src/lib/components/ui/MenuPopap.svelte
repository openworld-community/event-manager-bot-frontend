<script lang="ts">
  import Link from "../Link.svelte";
  import Button from "../Button.svelte";
  import Popup from "../Popup.svelte";
  import { togglePopup } from "$lib/logic/showPopup";
  import { PopupVariant } from "$lib/types/enums";
  import { ButtonVariant, ButtonRounded } from "$lib/types/enums";

  export let showPopup: boolean;
</script>

<div class="menu-popup">
<Popup bind:showPopup
variant = {PopupVariant.primary}
>
 <div 
 slot="content"
 class="menu-content"
 >
 <div class="menu-popup-btn">
   <Link url="./edit-form">
    <Button
    variant = {ButtonVariant.primary}
    width='320px'
    height='45px'
    rounded = {ButtonRounded.aLittle}
    borderRadius='8px'
    on:click = {() => togglePopup(false)}
    >
    <p
    class="menu-popup-btn_text"
    >create new event</p> 
    </Button>
  </Link>
 </div>
  
 <div class="menu-popup-btn">
  <Button
   variant = {ButtonVariant.secondary}
   width='320px'
   height='45px'
   borderRadius='8px'
   rounded = {ButtonRounded.aLittle}
   on:click = {() => togglePopup(false)}
  >
    <p>view my ivents</p>
  </Button>
 </div>
 </div>
</Popup>
</div>

<style lang="scss">
  .menu-popup {
    position: absolute;
    bottom: calc(100dvh - 97.5dvh + 200px);
    left: 0;
    width: 100%;
  }
  
  .menu-content {
    width: 320px;
    height: 170px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .menu-popup-btn {
    width: 300px;
    height: 20px;

    padding: 5px;

    &_text {
     color: #fff;
    }
  }
</style>