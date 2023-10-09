import { createEvent, createStore } from 'effector';
import { FormSteps } from '$lib/types/enums';

export const stepUp = createEvent<unknown>();
export const stepDown = createEvent<unknown>();
export const formStepStore = createStore<FormSteps>(FormSteps.ABOUT);

formStepStore.on(stepUp, (state) => {
  switch (state) {
    case FormSteps.ABOUT:
      return FormSteps.CAPACITY;
    case FormSteps.CAPACITY:
      return FormSteps.PRICE;
    case FormSteps.PRICE:
      return FormSteps.PRICE;
  }
});

formStepStore.on(stepDown, (state) => {
  switch (state) {
    case FormSteps.ABOUT:
      return FormSteps.ABOUT;
    case FormSteps.CAPACITY:
      return FormSteps.ABOUT;
    case FormSteps.PRICE:
      return FormSteps.CAPACITY;
  }
});
