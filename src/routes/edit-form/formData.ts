import type { HTMLInputTypeAttribute } from 'svelte/elements';

type InputData = {
  label: string;
  initValue: string;
  type: HTMLInputTypeAttribute;
};

export const formData: InputData[] = [
  {
    label: 'Name',
    initValue: '',
    type: 'text'
  },

  {
    label: 'Link',
    initValue: '',
    type: 'text'
  },
  {
    label: 'Start date',
    initValue: '',
    type: 'date'
  },
  {
    label: 'Remind date',
    initValue: '',
    type: 'date'
  },
  {
    label: 'Max adults amount',
    initValue: '100',
    type: 'number'
  },
  {
    label: 'Max children amount',
    initValue: '100',
    type: 'number'
  },
  {
    label: 'Max adults per reservation',
    initValue: '4',
    type: 'number'
  },
  {
    label: 'Max children per reservation',
    initValue: '4',
    type: 'number'
  },
  {
    label: 'Adult ticket price',
    initValue: '100',
    type: 'number'
  },
  {
    label: 'Children ticket price',
    initValue: '50',
    type: 'number'
  },
  {
    label: 'Currency',
    initValue: 'USD',
    type: 'text'
  }
];
