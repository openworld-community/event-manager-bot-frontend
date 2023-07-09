import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Event as EffectorEvent } from 'effector';
import type { FormEventHandler } from 'svelte/elements';
import axios from 'axios';
import { editFormData } from './editFormData';

type FormInputEventType = string;
type FormSubmitEventType = FormEventHandler<HTMLFormElement>;

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
  const response = await axios.post(`${process.env.API_URL}/event`, data);
  return response.data;
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
