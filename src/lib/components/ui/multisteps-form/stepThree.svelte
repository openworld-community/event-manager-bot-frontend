<script lang="ts">
    import { formDataStores } from "$lib/logic/editForm";
    import { formStepSignStore } from "$lib/logic/editFormSteps";
    import { FormSteps } from "$lib/types/enums";
    import Input from "$lib/components/Input.svelte";
    </script>
    
    <div>
      <h3>{$formStepSignStore}</h3>  
      {#each formDataStores as inputData }
      {#if inputData.step === FormSteps.PRICE}
      <Input label={inputData.label} type={inputData.type} handler={inputData.handler}
      valueStore={inputData.valueStore} variant={inputData.variant} step={FormSteps.PRICE}/>
      {/if}
      {/each}
    </div>
    
    <style lang="scss">
    
    </style>