<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import './layout.scss'
    import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";
    import MenuPopap from "$lib/components/ui/MenuPopap.svelte";
  
  let showPopup: boolean = isPopupOpenStore.getState()
  isPopupOpenStore.on(togglePopup, (state, payload) => showPopup = state = payload)
  console.log(showPopup)
</script>

<Header></Header>
<div class="main">
    <slot as="main">
    </slot>
    <MenuPopap showPopup={showPopup}/>
</div>
<Footer></Footer>

<style>
    .main {
      display: flex;
      flex-flow: column nowrap;
      position: relative;

    }
  </style>