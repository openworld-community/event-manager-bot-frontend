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

// Создаем новую функцию для обработки события выбора часового пояса
export const createTimeZoneEventHandler =
  (handler: EffectorEvent<FormInputEventType>): FormEventHandler<HTMLSelectElement> =>
  (event) =>
    handler(event.target.value);

// Обновляем formDataStores, чтобы включить новое поле выбора часового пояса
export const formDataStores = editFormData.map((item) => {
  const event = createEvent<FormInputEventType>();
  const store = createStore(item.initValue).on(event, handleInputChange);

  // Добавляем обработчик для поля выбора часового пояса
  if (item.type === 'select') {
    const timeZoneEvent = createEvent<FormInputEventType>();
    const timeZoneStore = createStore('').on(timeZoneEvent, handleInputChange);
    return {
      ...item,
      handler: createTimeZoneEventHandler(timeZoneEvent),
      valueStore: timeZoneStore
    };
  }

  return { ...item, handler: createInputEventHandler(event), valueStore: store };
});

// Обновляем formMapper, чтобы включить новое поле выбора часового пояса
const formMapper = (storesData: string[]) => {
  const data: Record<string, string> = {};
  for (let i = 0; i < storesData.length; i++) {
    if (editFormData[i].type === 'select') {
      // Добавляем значение выбранного часового пояса
      data[editFormData[i].systemName] = storesData[i];
    } else {
      data[editFormData[i].systemName] = storesData[i];
    }
  }
  return data;
};

// Обновляем sample, чтобы включить новое поле выбора часового пояса
sample({
  source: formDataStores.map(({ valueStore }) => valueStore),
  clock: submitForm,
  fn: formMapper,
  target: submitFormFx
});
