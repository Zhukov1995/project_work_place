import { IModal } from "../../store/interfaces";


export interface ITargetModal {
    parentRef: any,
    app: IModal,
    children?: React.ReactNode
}

export interface IModalPosition {
    x: number,
    y: number
}

export interface IModalSize {
    width: number,
    height: number
}