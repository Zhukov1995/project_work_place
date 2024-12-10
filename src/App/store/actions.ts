import * as type from "./constant";

export const toggleTaskBar = () => ({ type: type.TOGGLE_TASK_BAR });
export const setIdTargetModal = (id: number) => ({ type: type.SET_ID_TARGET_MODAL, payload: id });
export const setZIndexTargetModal = (id: number) => ({ type: type.SET_ZINDEX_TARGET_MODAL, payload: id });
export const closeModal = (id: number) => ({ type: type.CLOSE_MODAL, payload: id });
export const toggleRollup = (id: number) => ({ type: type.TOGGLE_ROLLUP, payload: id });
export const toggleFullscreen = (id: number) => ({ type: type.TOGGLE_FULLSCREEN, payload: id });
export const toggleFullscreenApp = () => ({ type: type.TOGGLE_FULLSCREEN_APP });
export const createModal = (id: number) => ({ type: type.CREATE_MODAL, payload: id });
export const toggleCalendar = () => ({ type: type.TOGGLE_CALENDAR });
export const closeCalendar = () => ({ type: type.CLOSE_CALENRAR });
export const toggleAllAppsOpen = () => ({ type: type.TOGGLE_All_APPS_OPEN });
export const toggleAppWindowShow = (id: number, bool: boolean) => ({ type: type.TOGGLE_APP_WINDOW_SHOW, payload: { id, bool } });
export const setVirtualKeyboardValue = (value: string) => ({ type: type.SET_VIRTUAL_KEYBOARD_VALUE, payload: value });
export const toggleKeyboard = () => ({ type: type.TOGGLE_KEYBOARD });
export const setLabelIndex = (id: number, value: number) => ({ type: type.SET_LABEL_INDEX, payload: { id, value } });