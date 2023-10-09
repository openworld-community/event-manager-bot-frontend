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
    variant: InputVariant.formEvent,
    step: FormSteps.ABOUT
  },

  {
    label: 'Link',
    systemName: 'link',
    initValue: '',
    type: 'text',
    variant: InputVariant.formEvent,
    step: FormSteps.ABOUT
  },
  {
    label: 'Start date',
    systemName: 'start',
    initValue: '',
    type: 'date',
    variant: InputVariant.formEvent,
    step: FormSteps.ABOUT
  },
  {
    label: 'Remind date',
    systemName: 'remind',
    initValue: '',
    type: 'date',
    variant: InputVariant.formEvent,
    step: FormSteps.ABOUT
  },
  {
    label: 'Max adults amount',
    systemName: 'max_adults',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEvent,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Max children amount',
    systemName: 'max_children',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEvent,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Max adults per reservation',
    systemName: 'max_adults_per_reservation',
    initValue: '4',
    type: 'number',
    variant: InputVariant.formEvent,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Max children per reservation',
    systemName: 'max_children_per_reservation',
    initValue: '4',
    type: 'number',
    variant: InputVariant.formEvent,
    step: FormSteps.CAPACITY
  },
  {
    label: 'Adult ticket price',
    systemName: 'adult_ticket_price',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEvent,
    step: FormSteps.PRICE
  },
  {
    label: 'Children ticket price',
    systemName: 'children_ticket_price',
    initValue: '50',
    type: 'number',
    variant: InputVariant.formEvent,
    step: FormSteps.PRICE
  },
  {
    label: 'Currency',
    systemName: 'currency',
    initValue: 'USD',
    type: 'text',
    variant: InputVariant.formEvent,
    step: FormSteps.PRICE
  }
];
