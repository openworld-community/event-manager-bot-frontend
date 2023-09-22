import { createEvent, createStore } from 'effector';

export const updateMenuInput = createEvent<string>();

const state = 'message';

export const menuInput = createStore<string>(state).on(updateMenuInput, (_, value) => value);

const submitForm = createEvent();
submitForm.watch(() => {
  const message = menuInput.getState();
  console.log(message);
});
