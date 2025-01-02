import * as type from "./constant";
import { appList } from "../data/apps";
import { IinitialState } from "./interfaces";



const initialState: IinitialState = {
    isAllAppsOpen: false,
    isWidgetPanelOpen: false,
    isVirtualKeyboardOpen: false,
    isFullscreenApp: false,
    isOpenTaskBar: true,
    modalList: [],
    appList: appList,
    targetModal: 0,
    virtualKeyboardValue: ""
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case type.TOGGLE_FULLSCREEN_APP:
            return { ...state, isFullscreenApp: !state.isFullscreenApp }

        case type.TOGGLE_TASK_BAR:
            return { ...state, isOpenTaskBar: !state.isOpenTaskBar }

        case type.TOGGLE_WIDGET_PANEL: {
            if (state.isOpenTaskBar) {
                return { ...state, isWidgetPanelOpen: !state.isWidgetPanelOpen }
            } else {
                return state
            }
        }

        case type.TOGGLE_All_APPS_OPEN:
            return { ...state, isAllAppsOpen: !state.isAllAppsOpen }

        case type.CLOSE_WIDGET_PANEL:
            return { ...state, isWidgetPanelOpen: false }

        case type.SET_ID_TARGET_MODAL:
            return { ...state, targetModal: action.payload }

        case type.SET_ZINDEX_TARGET_MODAL: {
            const target = state.modalList.findIndex(el => el.id === action.payload);
            const newList = state.modalList.map(el => {
                return {
                    ...el,
                    config: {
                        ...el.config,
                        zIndex: 1
                    }
                }
            });
            if (target !== -1) {
                newList[target].config.zIndex = 2;
            }
            return { ...state, modalList: newList }
        }

        case type.CLOSE_MODAL: {
            const target = state.appList.findIndex(el => el.id === action.payload);
            const newAppList = [...state.appList];
            appList[target].config.isOpen = false;
            appList[target].config.fullscreen = false;
            appList[target].config.rollup = false;

            const newList = state.modalList.filter(el => el.id !== action.payload);
            return { ...state, modalList: newList, appList: newAppList }
        }

        case type.TOGGLE_ROLLUP: {
            const target = state.modalList.findIndex(el => el.id === action.payload);
            const newList = [...state.modalList];
            if (target !== -1) {
                newList[target].config.rollup = !newList[target].config.rollup;
            }
            return { ...state, modalList: newList }
        }

        case type.TOGGLE_FULLSCREEN: {
            const target = state.modalList.findIndex(el => el.id === action.payload);
            const newList = [...state.modalList];
            if (target !== -1) {
                newList[target].config.fullscreen = !newList[target].config.fullscreen;
            }
            return { ...state, modalList: newList }
        }

        case type.CREATE_MODAL: {
            const target = state.appList.findIndex(el => el.id === action.payload);
            const app = state.appList[target];
            app.config.isOpen = true;
            return { ...state, modalList: [...state.modalList, app] }
        }

        case type.TOGGLE_APP_WINDOW_SHOW: {
            const target = state.appList.findIndex(el => el.id === action.payload.id);
            const newAppList = [...state.appList];
            appList[target].config.show_window = action.payload.bool;

            return { ...state, appList: newAppList }
        }

        case type.SET_VIRTUAL_KEYBOARD_VALUE: {
            return { ...state, virtualKeyboardValue: action.payload }
        }

        case type.TOGGLE_KEYBOARD: {
            return { ...state, isVirtualKeyboardOpen: !state.isVirtualKeyboardOpen }
        }

        case type.SET_LABEL_INDEX: {
            const target = state.appList.findIndex(el => el.id === action.payload.id);
            const newAppList = [...state.appList];
            newAppList[target].config.labelIndex = action.payload.value;
            return { ...state, appList: newAppList }
        }

        default: return state;
    }
}

export default reducer;