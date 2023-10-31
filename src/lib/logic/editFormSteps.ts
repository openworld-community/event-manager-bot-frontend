import { createEvent, createStore, sample } from 'effector';
import { FormSteps } from '$lib/types/enums';
import { FORM_STEPS_TYTLES } from '$lib/utils/strings';

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

export const formStepSignStore = formStepStore.map((state) => {
  switch (state) {
    case FormSteps.ABOUT:
      return FORM_STEPS_TYTLES.ABOUT;
    case FormSteps.CAPACITY:
      return [FORM_STEPS_TYTLES.CAPACITY.AMOUNT, FORM_STEPS_TYTLES.CAPACITY.PER_RESERV];
    case FormSteps.PRICE:
      return FORM_STEPS_TYTLES.PRICE;
  }
});

sample({
  source: formStepSignStore,
  fn: (value) => value
});
