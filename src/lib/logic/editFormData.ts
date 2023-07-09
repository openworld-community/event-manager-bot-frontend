import type { HTMLInputTypeAttribute } from 'svelte/elements';

type InputData = {
  label: string;
  systemName: string;
  initValue: string;
  type: HTMLInputTypeAttribute;
};

export const editFormData: InputData[] = [
  {
    label: 'Name',
    systemName: 'name',
    initValue: '',
    type: 'text'
  },

  {
    label: 'Link',
    systemName: 'link',
    initValue: '',
    type: 'text'
  },
  {
    label: 'Start date',
    systemName: 'start',
    initValue: 'now+12h',
    type: 'datetime-local'
  },
  {
    label: 'Remind date',
    systemName: 'remind',
    initValue: 'now+1d',
    type: 'datetime-local'
  },
  {
    label: 'Max adults amount',
    systemName: 'max_adults',
    initValue: '100',
    type: 'number'
  },
  {
    label: 'Max children amount',
    systemName: 'max_children',
    initValue: '100',
    type: 'number'
  },
  {
    label: 'Max adults per reservation',
    systemName: 'max_adults_per_reservation',
    initValue: '4',
    type: 'number'
  },
  {
    label: 'Max children per reservation',
    systemName: 'max_children_per_reservation',
    initValue: '4',
    type: 'number'
  },
  {
    label: 'Adult ticket price',
    systemName: 'adult_ticket_price',
    initValue: '100',
    type: 'number'
  },
  {
    label: 'Children ticket price',
    systemName: 'children_ticket_price',
    initValue: '50',
    type: 'number'
  },
  {
    label: 'Currency',
    systemName: 'currency',
    initValue: 'USD',
    type: 'text'
  }
];
