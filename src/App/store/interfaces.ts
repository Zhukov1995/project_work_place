interface IConfigModal {
    isOpen: boolean,
    zIndex: number,
    labelIndex: number,
    rollup: boolean,
    fullscreen: boolean,
    show_window: boolean
}

export interface IModal {
    id: number,
    name: string,
    component?: string,
    default: boolean,
    logo: string,
    config: IConfigModal
}

export interface IinitialState {
    isAllAppsOpen: boolean,
    isWidgetPanelOpen: boolean,
    isVirtualKeyboardOpen: boolean,
    isFullscreenApp: boolean,
    isOpenTaskBar: boolean,
    modalList: IModal[],
    appList: IModal[],
    targetModal: number,
    virtualKeyboardValue: string
}