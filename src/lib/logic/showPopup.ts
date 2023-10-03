import { createEvent, createStore, sample } from 'effector';

export const togglePopup = createEvent<boolean>();
export const isPopupOpenStore = createStore(false);
isPopupOpenStore.on<boolean>(togglePopup, (_, payload) => payload);

sample({
  source: isPopupOpenStore,
  fn: (value) => value
});
