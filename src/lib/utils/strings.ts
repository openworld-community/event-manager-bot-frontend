export const peredelanoName = 'PeredelanoConf_event_manager';

const CAPACITY_TITLES = {
  AMOUNT: 'Maximum amount',
  PER_RESERV: 'Maximum per reservation'
};

interface ITitles {
  ABOUT: string;
  CAPACITY: {
    AMOUNT: string;
    PER_RESERV: string;
  };
  PRICE: string;
}

export const FORM_STEPS_TYTLES: ITitles = {
  ABOUT: 'About event',
  CAPACITY: CAPACITY_TITLES,
  PRICE: 'Ticket price'
};
