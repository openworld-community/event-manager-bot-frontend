<script>
  // import { onMount } from 'svelte/types/runtime/internal/lifecycle'; 
  // onMount будет использован для того чтобы показать версию приложения в футере, пока я жду на нее эндпоинт
  import Button from './button.svelte';
  import Input from './Input.svelte';
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
    rounded = {ButtonRounded.aLittle}
    on:click = {() => togglePopup(true)}
    >
    <div class="footer--menu-button">
      <p>X</p>
      <p>Меню</p>
    </div>
    </Button>
    <form>
      <Input 
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
      rounded = {ButtonRounded.aLittle}
      >
      ^
      |
      </Button>
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
    margin-top: 20px;
    gap: 90px;
    background-color: var(--primary-color);

    &--menu-button {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 5px;

      height: auto;

      p {
        height: 15px;
        font-size: 16px;
      }
    }
  }

</style>