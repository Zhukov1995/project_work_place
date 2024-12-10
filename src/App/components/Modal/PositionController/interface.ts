export interface IConfigModal {
    modalSize: {
        width: number,
        height: number
    },
    modalPosition: {
        x: number,
        y: number
    }
}

export interface IConfigModalProps {
    setModalConfig: any,
    setIsOpenModalConfig: any
}