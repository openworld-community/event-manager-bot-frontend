import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Event as EffectorEvent } from 'effector';
import type { FormEventHandler } from 'svelte/elements';
import { editFormData } from './editFormData';
import { HOST_TEST } from '$lib/utils/endpoints';
import { Reservation } from './event';
import type { FormInputEventType } from '$lib/types/formTypes';

export type FormSubmitEventType = FormEventHandler<HTMLFormElement>;

const handleInputChange = (_: unknown, value: FormInputEventType) => value;

export const createInputEventHandler =
  (handler: EffectorEvent<FormInputEventType>): FormEventHandler<HTMLInputElement> =>
  (event) =>
    handler((event.target as HTMLInputElement).value);
export const createFormEventHandler =
  (handler: EffectorEvent<HTMLFormElement>): FormSubmitEventType =>
  (data) =>
    handler(data.currentTarget);

export const formDataStores = editFormData.map((item) => {
  const event = createEvent<FormInputEventType>();
  const store = createStore(item.initValue).on(event, handleInputChange);

  return { ...item, handler: createInputEventHandler(event), valueStore: store };
});

export const submitForm = createEvent<HTMLFormElement>();

const submitFormFx = createEffect(async (data: Record<string, string>) => {
  const event = new Reservation(data);
  const res = await fetch(`${HOST_TEST}/event`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'сontent-type': 'application/json'
    },
    body: JSON.stringify(event.toObject())
  }).then((result) => console.log(result));
  return res;
});
const formMapper = (storesData: string[]) => {
  const data: Record<string, string> = {};
  for (let i = 0; i < storesData.length; i++) {
    data[editFormData[i].systemName] = storesData[i];
  }
  return data;
};
sample({
  source: formDataStores.map(({ valueStore }) => valueStore),
  clock: submitForm,
  fn: formMapper,
  target: submitFormFx
});
