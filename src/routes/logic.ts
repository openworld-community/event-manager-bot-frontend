import { createEvent, createStore } from 'effector';
import { browser } from '$app/environment';

const browserLoad = createEvent();

export const userIDStore = createStore('').on(browserLoad, () => Telegram.WebApp.initDataUnsafe.user?.id.toString());
export const userFirstNameStore = createStore('').on(
  browserLoad,
  () => Telegram.WebApp.initDataUnsafe.user?.first_name
);
export const userLastNameStore = createStore('').on(browserLoad, () => Telegram.WebApp.initDataUnsafe.user?.last_name);

if (browser) browserLoad();
