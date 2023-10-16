import type { HTMLInputTypeAttribute } from 'svelte/elements';
import { InputVariant, FormSteps } from '$lib/types/enums';

type InputData = {
  label: string;
  systemName: string;
  initValue: string;
  type: HTMLInputTypeAttribute;
  variant: InputVariant;
  step?: FormSteps;
};

export const editFormData: InputData[] = [
  {
    label: 'Name',
    systemName: 'name',
    initValue: '',
    type: 'text',
    variant: InputVariant.formEventBig,
    step: FormSteps.ABOUT
  },

  {
    label: 'Link',
    systemName: 'link',
    initValue: '',
    type: 'text',
    variant: InputVariant.formEventBig,
    step: FormSteps.ABOUT
  },
  {
    label: 'Start date',
    systemName: 'start',
    initValue: '',
    type: 'date',
    variant: InputVariant.formEventSmall,
    step: FormSteps.ABOUT
  },
  {
    label: 'Remind date',
    systemName: 'remind',
    initValue: '',
    type: 'date',
    variant: InputVariant.formEventSmall,
    step: FormSteps.ABOUT
  },
  {
    label: 'Adults',
    systemName: 'max_adults',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEventSmall,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Children',
    systemName: 'max_children',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEventSmall,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Adults',
    systemName: 'max_adults_per_reservation',
    initValue: '4',
    type: 'number',
    variant: InputVariant.formEventSmall,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Children',
    systemName: 'max_children_per_reservation',
    initValue: '4',
    type: 'number',
    variant: InputVariant.formEventSmall,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Adult ticket price',
    systemName: 'adult_ticket_price',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEventSmall,
    step: FormSteps.PRICE
  },
  {
    label: 'Children ticket price',
    systemName: 'children_ticket_price',
    initValue: '50',
    type: 'number',
    variant: InputVariant.formEventSmall,
    step: FormSteps.PRICE
  },
  {
    label: 'Currency',
    systemName: 'currency',
    initValue: 'USD',
    type: 'text',
    variant: InputVariant.formEventBig,
    step: FormSteps.PRICE
  }
];
