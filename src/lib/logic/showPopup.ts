import { createEvent, createStore, sample } from 'effector';
import { writable } from 'svelte/store';

export const togglePopup = createEvent<boolean>();
export const isPopupOpenStore = createStore(false);
isPopupOpenStore.on<boolean>(togglePopup, (_, payload) => payload);

export const showPopup = writable(isPopupOpenStore.getState());
showPopup.subscribe((value) => value);

sample({
  source: isPopupOpenStore,
  fn: (value) => {
    showPopup.set(value);
    return value;
  }
});
