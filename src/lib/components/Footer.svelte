<script>
  // import { onMount } from 'svelte/types/runtime/internal/lifecycle'; 
  import Input from './Input.svelte';
  import Button from './Button.svelte';
  import MenuArrowUp from './icons/MenuArrowUp.svelte';
  import { togglePopup } from '$lib/logic/showPopup';
  import { updateMenuInput, menuInput } from '$lib/logic/editMenuInput';
  import { InputVariant } from '$lib/types/enums';
  import { ButtonVariant, ButtonRounded } from "$lib/types/enums";

  menuInput.watch(message => {
    console.log(message)
  })

</script>

<footer class="footer">
    <Button
    width='70px'
    height='30px'
    borderRadius='12px'
    variant = {ButtonVariant.primary}
    rounded = {ButtonRounded.smallRadius}
    on:click = {() => togglePopup(true)}
    >
    <div class="footer--menu-button">
      <p>X</p>
      <p>Меню</p>
    </div>
    </Button>
    <form>
      <div class="footer--menu-form">
      <Input 
      label=''
      variant = {InputVariant.menu}
      placeholder = 'message'
      handler = {(e) => updateMenuInput(e.currentTarget.value)}
      valueStore = {menuInput}
      />
      <Button
      height='45px'
      width='fit-content'
      borderRadius='5px'
      variant = {ButtonVariant.none}
      rounded = {ButtonRounded.smallRadius}
      >
        <MenuArrowUp />
      </Button>
    </div>
    </form>
</footer>

<style lang="scss">
  .footer {
    width: 340px;
    height: 48px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 90px;
    background-color: var(--primary-background-color);

    &--menu-button {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 5px;

     height: 30px;

      p {
        height: 15px;
        font-size: 16px;
      }
    }

    &--menu-form {
      display: flex;
      flex-flow: row nowrap;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
  }

</style>