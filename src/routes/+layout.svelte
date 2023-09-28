<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import './layout.scss'
    import { isPopupOpenStore, togglePopup } from "$lib/logic/showPopup";
    import MenuPopap from "$lib/components/ui/MenuPopap.svelte";
  // без строчек 8 и 9 попап не подымается..
  let showPopup: boolean = isPopupOpenStore.getState()
  isPopupOpenStore.on(togglePopup, (_, payload) => showPopup = payload)
</script>

<Header></Header>
<div class="main">
    <slot as="main">
    </slot>
    <MenuPopap showPopup={showPopup}/>
</div>
<Footer></Footer>

<!-- не понял следующщий коментарий 
А здесь сделать подписку на стор showPopup={$showPopup} -->

<style>
    .main {
      display: flex;
      flex-flow: column nowrap;
      position: relative;

    }
  </style>