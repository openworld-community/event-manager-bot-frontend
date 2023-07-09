import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Event as EffectorEvent } from 'effector';
import type { FormEventHandler } from 'svelte/elements';
import { editFormData } from './editFormData';
import axios from 'axios';

type FormInputEventType = string;
type FormSubmitEventType = FormEventHandler<HTMLFormElement>;

const handleInputChange = (_: unknown, value: FormInputEventType) => value;

// Convert the data format to match your API's requirements
const convertData = (data: Record<string, string>) => {
  // Conversion logic
  // This is just an example. Update this to match your API requirements
  return {
    name: data.name,
    link: data.link,
    max_adults: parseInt(data.max_adults),
    max_children: parseInt(data.max_children),
    event_start_time: data.start,
    remind: data.remind,
    max_adults_per_reservation: parseInt(data.max_adults_per_reservation),
    max_children_per_reservation: parseInt(data.max_children_per_reservation),
    adult_ticket_price: parseInt(data.adult_ticket_price),
    child_ticket_price: parseInt(data.children_ticket_price),
    currency: data.currency
  };
};

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
  const apiServer = import.meta.env.VITE_API_SERVER;
  const apiPort = import.meta.env.VITE_API_PORT;

  const convertedData = convertData(data);

  const response = await axios.post(`${apiServer}:${apiPort}/event`, convertedData);

  return response.data;
});

sample({
  source: formDataStores.map(({ valueStore }) => valueStore),
  clock: submitForm,
  fn: formMapper,
  target: submitFormFx
});
