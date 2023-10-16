<script lang="ts">
import { formDataStores } from "$lib/logic/editForm";
import { formStepSignStore } from "$lib/logic/editFormSteps";
import { FormSteps } from "$lib/types/enums";
import Input from "$lib/components/Input.svelte";

const checkString = 'remind' || 'start'
</script>

<div class="step-one">
  <h3>{$formStepSignStore}</h3>  
  {#each formDataStores as inputData }
   {#if inputData.step === FormSteps.ABOUT && inputData.systemName !== checkString}
      <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
       valueStore={inputData.valueStore} variant={inputData.variant} step={FormSteps.ABOUT}/>
       {#if inputData.systemName === 'start' || inputData.systemName === 'remind'}
       <div class="step-one--time">
        <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
        valueStore={inputData.valueStore} variant={inputData.variant} step={FormSteps.ABOUT}/>
       </div>
       {/if}
   {/if}
  {/each}
</div>

<style lang="scss">
    .step-one {
      margin: 5px 5px 5px 5px;
      &--time {
        display: flex;
        flex-flow: row nowrap;
      }
    }
</style>