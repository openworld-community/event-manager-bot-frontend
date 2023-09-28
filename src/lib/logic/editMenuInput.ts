import { createEvent, createStore } from 'effector';

export const updateMenuInput = createEvent<string>();

export const menuInput = createStore<string>('message').on(updateMenuInput, (_, value) => value);

const submitForm = createEvent();
submitForm.watch(() => {
  const message = menuInput.getState();
  console.log(message);
});

// message в конечном итоге будет использоваться для общения с ботом через ui
// если у инпута в нижнем меню будет такой функционал (думаю что да)
