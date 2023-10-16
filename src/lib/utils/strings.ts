
import { FormSteps } from "$lib/types/enums";


export const peredelanoName = 'PeredelanoConf_event_manager';

const CAPACITY_TITLES = {
    AMOUNT: 'Maximum amount',
    PER_RESERV: 'Maximum per reservation'
}

interface ITitles {
  ABOUT: string,
  CAPACITY: {
    AMOUNT: string,
    PER_RESERV: string
  },
  PRICE: string
}

export const FORM_STEPS_TYTLES: ITitles = {
  ABOUT: 'About event',
  CAPACITY: CAPACITY_TITLES,
  PRICE: 'Ticket price'
}

// export const FormStepsSigns = new Map<any, string | object>().set(
//     FormSteps.ABOUT, 'About event'
// ).set(
//     FormSteps.CAPACITY, CAPACITY_SIGNS
// ).set(
//     FormSteps.PRICE, 'Ticket price'
// )
