import { createEvent, createStore } from 'effector';
import type { Event as EffectorEvent } from 'effector';
import type { FormEventHandler } from 'svelte/elements';
import { formData } from './formData';

type EventType = string;

const handleInputChange = (_: unknown, value: EventType) => value;

export const createInputEventHandler =
  (handler: EffectorEvent<EventType>): FormEventHandler<HTMLInputElement> =>
  (event) =>
    handler((event.target as HTMLInputElement).value);
export const createFormEventHandler =
  (handler: EffectorEvent<void>): FormEventHandler<HTMLFormElement> =>
  () =>
    handler();

export const formDataStores = formData.map((item) => {
  const event = createEvent<EventType>();
  const store = createStore(item.initValue).on(event, handleInputChange);

  return { ...item, handler: createInputEventHandler(event), valueStore: store };
});

export const submitForm = createEvent();
