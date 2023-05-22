import { createEvent, createStore } from 'effector';
import type { Event as EffectorEvent } from 'effector';
import type { FormEventHandler } from 'svelte/elements';

type EventType = string;

const handleInputChange = (_: unknown, value: EventType) => value;

export const changeName = createEvent<EventType>();
export const nameStore = createStore('').on(changeName, handleInputChange);

export const changeLink = createEvent<EventType>();
export const linkStore = createStore('').on(changeLink, handleInputChange);

export const changeStart = createEvent<EventType>();
export const startStore = createStore('').on(changeStart, handleInputChange);

export const changeRemind = createEvent<EventType>();
export const remindStore = createStore('').on(changeRemind, handleInputChange);

export const changeMaxAdults = createEvent<EventType>();
export const maxAdultsStore = createStore('100').on(changeMaxAdults, handleInputChange);

export const changeMaxChildren = createEvent<EventType>();
export const maxChildrenStore = createStore('100').on(changeMaxChildren, handleInputChange);

export const changeMaxAdultsPerReservation = createEvent<EventType>();
export const maxAdultsPerReservationStore = createStore('4').on(changeMaxAdultsPerReservation, handleInputChange);

export const changeMaxChildrenPerReservation = createEvent<EventType>();
export const maxChildrenPerReservationStore = createStore('4').on(changeMaxChildrenPerReservation, handleInputChange);

export const changeAdultTicketPrice = createEvent<EventType>();
export const adultTicketPriceStore = createStore('100').on(changeAdultTicketPrice, handleInputChange);

export const changeChildrenTicketPrice = createEvent<EventType>();
export const childrenTicketPriceStore = createStore('50').on(changeChildrenTicketPrice, handleInputChange);

export const changeCurrency = createEvent<EventType>();
export const currencyStore = createStore('USD').on(changeCurrency, handleInputChange);

export const submitForm = createEvent();

export const createInputEventHandler =
  (handler: EffectorEvent<EventType>): FormEventHandler<HTMLInputElement> =>
  (event) =>
    handler((event.target as HTMLInputElement).value);
export const createFormEventHandler =
  (handler: EffectorEvent<void>): FormEventHandler<HTMLFormElement> =>
  () =>
    handler();
