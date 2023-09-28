<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";
    import MenuPopap from "$lib/components/ui/MenuPopap.svelte"; 
    let showPopup: boolean = isPopupOpenStore.getState()
    isPopupOpenStore.on(togglePopup, (_, payload) => showPopup = payload)
</script>

<Header />
<div class="main">
    <slot as="main">
    </slot>
    <MenuPopap showPopup={showPopup}/>
</div>
<Footer />

<style>
    .main {
      display: flex;
      flex-flow: column nowrap;
      position: relative;

      height: calc(100dvh - 48px - 48px);
      background-color: aliceblue;
      width: 340px;
    }
  </style>