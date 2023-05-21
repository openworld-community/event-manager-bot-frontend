import { createEvent, createStore } from 'effector';

const handleInputChange = (_, event: InputEvent) => (event.target as HTMLInputElement).value;

export const changeName = createEvent<InputEvent>();
export const nameStore = createStore('').on(changeName, handleInputChange);

export const changeLink = createEvent<InputEvent>();
export const linkStore = createStore('').on(changeLink, handleInputChange);

export const changeStart = createEvent<InputEvent>();
export const startStore = createStore('').on(changeStart, handleInputChange);

export const changeRemind = createEvent<InputEvent>();
export const remindStore = createStore('').on(changeRemind, handleInputChange);

export const changeMaxAdults = createEvent<InputEvent>();
export const maxAdultsStore = createStore('').on(changeMaxAdults, handleInputChange);

export const changeMaxChildren = createEvent<InputEvent>();
export const maxChildrenStore = createStore('').on(changeMaxChildren, handleInputChange);

export const changeMaxAdultsPerReservation = createEvent<InputEvent>();
export const maxAdultsPerReservationStore = createStore('').on(changeMaxAdultsPerReservation, handleInputChange);

export const changeMaxChildrenPerReservation = createEvent<InputEvent>();
export const maxChildrenPerReservationStore = createStore('').on(changeMaxChildrenPerReservation, handleInputChange);

export const changeAdultTicketPrice = createEvent<InputEvent>();
export const adultTicketPriceStore = createStore('').on(changeAdultTicketPrice, handleInputChange);

export const changeChildrenTicketPrice = createEvent<InputEvent>();
export const childrenTicketPriceStore = createStore('').on(changeChildrenTicketPrice, handleInputChange);

export const changeCurrency = createEvent<InputEvent>();
export const currencyStore = createStore('USD').on(changeCurrency, handleInputChange);

export const submitForm = createEvent<SubmitEvent>();
