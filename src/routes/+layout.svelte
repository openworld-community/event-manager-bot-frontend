<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
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

<!--  
А здесь сделать подписку на стор showPopup={$showPopup} 
тс ругается когда я передаю так подписку и выкидывает очень сложный тайпинг 
который должен быть у достойного реактивного значения способного показать попап...
-->

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