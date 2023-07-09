import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Event as EffectorEvent } from 'effector';
import type { FormEventHandler } from 'svelte/elements';
import { editFormData } from './editFormData';

type FormInputEventType = string | number;
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

const submitFormFx = createEffect(async (data: Record<string, string | number>) => {
  const timeZone = data['timeZone'] as string;
  const adjustedData = { ...data };

  const dateFields = ['start', 'remind'];
  dateFields.forEach((field) => {
    const date = new Date(data[field]);
    const zonedDate = new Date(date.toLocaleString("en-US", { timeZone }));
    adjustedData[field] = zonedDate.toISOString();
  });

  delete adjustedData['timeZone'];

  await fetch('https://test.eventmanagerbot.peredelano.io:8443/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(adjustedData)
  });
});

const formMapper = (storesData: (string | number)[], stores: typeof formDataStores) => {
  const data: Record<string, string | number> = {};
  for (let i = 0; i < storesData.length; i++) {
    data[stores[i].systemName] = storesData[i];
  }
  return data;
};

sample({
  source: formDataStores.map(({ valueStore }) => valueStore),
  clock: submitForm,
  fn: formMapper,
  target: submitFormFx
});
