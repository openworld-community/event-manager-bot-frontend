import type { HTMLInputTypeAttribute } from 'svelte/elements';

type InputData = {
  label: string;
  systemName: string;
  initValue: string;
  type: HTMLInputTypeAttribute;
  variant: string;
};

export const editFormData: InputData[] = [
  {
    label: 'Name',
    systemName: 'name',
    initValue: '',
    type: 'text',
    variant: 'form-event'
  },

  {
    label: 'Link',
    systemName: 'link',
    initValue: '',
    type: 'text',
    variant: 'form-event'
  },
  {
    label: 'Start date',
    systemName: 'start',
    initValue: '',
    type: 'date',
    variant: 'form-event'
  },
  {
    label: 'Remind date',
    systemName: 'remind',
    initValue: '',
    type: 'date',
    variant: 'form-event'
  },
  {
    label: 'Max adults amount',
    systemName: 'max_adults',
    initValue: '100',
    type: 'number',
    variant: 'form-event'
  },
  {
    label: 'Max children amount',
    systemName: 'max_children',
    initValue: '100',
    type: 'number',
    variant: 'form-event'
  },
  {
    label: 'Max adults per reservation',
    systemName: 'max_adults_per_reservation',
    initValue: '4',
    type: 'number',
    variant: 'form-event'
  },
  {
    label: 'Max children per reservation',
    systemName: 'max_children_per_reservation',
    initValue: '4',
    type: 'number',
    variant: 'form-event'
  },
  {
    label: 'Adult ticket price',
    systemName: 'adult_ticket_price',
    initValue: '100',
    type: 'number',
    variant: 'form-event'
  },
  {
    label: 'Children ticket price',
    systemName: 'children_ticket_price',
    initValue: '50',
    type: 'number',
    variant: 'form-event'
  },
  {
    label: 'Currency',
    systemName: 'currency',
    initValue: 'USD',
    type: 'text',
    variant: 'form-event'
  }
];
