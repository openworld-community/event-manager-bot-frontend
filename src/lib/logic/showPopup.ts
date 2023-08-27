import { createEvent, createStore } from "effector";

export const togglePopup = createEvent<boolean>()
export const isPopupOpenStore = createStore(false).on<boolean>(togglePopup, (state, payload) => state = payload)