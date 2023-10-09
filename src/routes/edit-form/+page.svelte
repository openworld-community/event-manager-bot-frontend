<script lang="ts">
  import TelegramScript from '$lib/components/TelegramScript.svelte';
  import MultistepsForm from '$lib/components/ui/MultistepsForm.svelte';
  import Button from '$lib/components/Button.svelte';
  import { ButtonRounded, ButtonVariant } from '$lib/types/enums';
  import { stepUp, stepDown, formStepStore } from '$lib/logic/editFormSteps';
  console.log($formStepStore);
</script>

<TelegramScript />

<div class="wrapper">   
  <h1 class="form--sign">
    Create new event
  </h1>
  <div class="form">
    <MultistepsForm activeStep={$formStepStore} />
  </div>
  <div class="form--buttons">
    <Button
      height="35px"
      width="250px"
      borderRadius=".5rem"
      rounded={ButtonRounded.smallRadius}
      variant={ButtonVariant.primary}
      on:click={() => stepUp()}
    >
      туда
    </Button>
    <Button
      height="35px"
      width="250px"
      borderRadius=".5rem"
      rounded={ButtonRounded.smallRadius}
      variant={ButtonVariant.secondary}
      on:click={() => stepDown()}
    >
      сюда
    </Button>
  </div>
</div>

<style lang="scss">
  .wrapper {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    // margin-left: 12%;
    position: relative;
  }

  .form {
    margin-bottom: 50%;
    height: 150px;

    &--buttons {
      position: absolute;
      bottom: 10%;

      width: fit-content;
      left: 12%;
    }

    &--sign {
      position: absolute;
      top: 2.5%;
      left: 12%;
    }
  }
</style>
