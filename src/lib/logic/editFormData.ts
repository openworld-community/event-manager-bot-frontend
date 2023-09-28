import type { HTMLInputTypeAttribute } from 'svelte/elements';
import { InputVariant } from '$lib/types/enums';

type InputData = {
  label: string;
  systemName: string;
  initValue: string;
  type: HTMLInputTypeAttribute;
  variant: InputVariant;
};

export const editFormData: InputData[] = [
  {
    label: 'Name',
    systemName: 'name',
    initValue: '',
    type: 'text',
    variant: InputVariant.formEvent
  },

  {
    label: 'Link',
    systemName: 'link',
    initValue: '',
    type: 'text',
    variant: InputVariant.formEvent
  },
  {
    label: 'Start date',
    systemName: 'start',
    initValue: '',
    type: 'date',
    variant: InputVariant.formEvent
  },
  {
    label: 'Remind date',
    systemName: 'remind',
    initValue: '',
    type: 'date',
    variant: InputVariant.formEvent
  },
  {
    label: 'Max adults amount',
    systemName: 'max_adults',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEvent
  },
  {
    label: 'Max children amount',
    systemName: 'max_children',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEvent
  },
  {
    label: 'Max adults per reservation',
    systemName: 'max_adults_per_reservation',
    initValue: '4',
    type: 'number',
    variant: InputVariant.formEvent
  },
  {
    label: 'Max children per reservation',
    systemName: 'max_children_per_reservation',
    initValue: '4',
    type: 'number',
    variant: InputVariant.formEvent
  },
  {
    label: 'Adult ticket price',
    systemName: 'adult_ticket_price',
    initValue: '100',
    type: 'number',
    variant: InputVariant.formEvent
  },
  {
    label: 'Children ticket price',
    systemName: 'children_ticket_price',
    initValue: '50',
    type: 'number',
    variant: InputVariant.formEvent
  },
  {
    label: 'Currency',
    systemName: 'currency',
    initValue: 'USD',
    type: 'text',
    variant: InputVariant.formEvent
  }
];
