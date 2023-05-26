import { createEvent, createStore } from 'effector';
import { browser } from '$app/environment';

const browserLoad = createEvent();

export const userIDStore = createStore('123').on(browserLoad, () => Telegram.WebApp.initDataUnsafe.user?.id.toString());
export const userFirstNameStore = createStore('Jane').on(
  browserLoad,
  () => Telegram.WebApp.initDataUnsafe.user?.first_name
);
export const userLastNameStore = createStore('Doe').on(
  browserLoad,
  () => Telegram.WebApp.initDataUnsafe.user?.last_name
);

if (browser) browserLoad();
