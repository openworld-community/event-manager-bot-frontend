<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import './layout.css'
    import Popup from "$lib/components/popup.svelte";
    import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";
    import Button from "$lib/components/button.svelte";
    import Link from "$lib/components/link.svelte";

  let showPopup: boolean;
  isPopupOpenStore.on(togglePopup, (state, payload) => showPopup = state = payload)
</script>

<Header></Header>
<div class="main">
    <slot as="main">
    </slot>
    <Popup bind:showPopup
    variant='menu-popup'
   >
     <div 
     slot="content"
     class="menu-content-box"
     >
       <Button
       variant='primary'
       size='280px'
       rounded='small-radius'
      >
        <Link url="./edit-form">
            <p
            style="color: #fff;"
            >create new event</p> 
        </Link>
      
      </Button>
      <Button
       variant='secondary'
       size='280px'
       rounded='small-radius'
      >
        <p>view my ivents</p>
      </Button>
     </div>
   </Popup>
</div>
<Footer></Footer>

<style>
    .menu-content-box {
      display: flex;
      flex-flow: column nowrap;
      gap: 4px;
    }
  </style>