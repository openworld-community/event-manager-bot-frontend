import { createEvent, createStore } from 'effector';

export const updateMenuInput = createEvent<string>();

export const menuInput = createStore<string>('message').on(updateMenuInput, (_, value) => value);

const submitForm = createEvent();
submitForm.watch(() => {
  const message = menuInput.getState();
  console.log(message);
});
