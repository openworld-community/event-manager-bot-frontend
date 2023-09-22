import { createEvent, createStore, forward } from 'effector';

export const togglePopup = createEvent<boolean>();
export const isPopupOpenStore = createStore(false).on<boolean>(togglePopup, (state, payload) => (state = payload));

forward({
  from: togglePopup,
  to: isPopupOpenStore
});
