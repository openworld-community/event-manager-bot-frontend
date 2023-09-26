<script lang="ts">
  import Popup from "../popup.svelte";
  import Button from "../button.svelte";
  import Link from "../Link.svelte";
  import { togglePopup } from "$lib/logic/showPopup";
  import { PopupVariant } from "$lib/types/enums";
  import { ButtonVariant, ButtonRounded } from "$lib/types/enums";

  // оставил здесь прокси функцию на toggle, так как время от времени 
  // popup закрывался не отправляя нас на страницу создания ивента 
  const toggle = () => {
    togglePopup(false)
  }

  export let showPopup: boolean;
</script>

<div class="menu-popup">
<Popup bind:showPopup
variant = {PopupVariant.primary}
>
<div>

</div>
 <div 
 slot="content"
 class="menu-content"
 >
 <div class="menu-popup-btn">
  <Button
  variant = {ButtonVariant.primary}
  width='320px'
  height='45px'
  rounded = {ButtonRounded.aLittle}
  borderRadius='8px'
  on:click = {() => toggle()}
 >
   <Link url="./edit-form">
       <p
       style="color: #fff;"
       >create new event</p> 
   </Link>
 
 </Button>
 </div>
  
 <div class="menu-popup-btn">
  <Button
   variant = {ButtonVariant.secondary}
   width='320px'
   height='45px'
   borderRadius='8px'
   rounded = {ButtonRounded.aLittle}
   on:click = {() => toggle()}
  >
    <p>view my ivents</p>
  </Button>
 </div>
 </div>
</Popup>
</div>

<style>
  .menu-popup {
    position: absolute;
    bottom: 37%;
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
  }
</style>