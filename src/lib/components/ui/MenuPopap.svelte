<script lang="ts">
  import Popup from "../popup.svelte";
  import Button from "../button.svelte";
  import Link from "../link.svelte";
  import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";

  const toggle = (): void => {
    togglePopup(false)
  }

  export let showPopup: boolean;
</script>

<div class="menu-popup">
<Popup bind:showPopup
variant='primary'
>
<div>

</div>
 <div 
 slot="content"
 class="menu-content"
 >
 <div class="menu-popup-btn">
  <Button
  variant='primary'
  size='320px'
  height='45px'
  rounded='small-radius'
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
   variant='secondary'
   size='320px'
   height='45px'
   borderRadius='8px'
   rounded='small-radius'
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