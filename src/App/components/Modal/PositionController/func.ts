import { IConfigModal } from "./interface";

export function clickVariant1(i: number): IConfigModal {
    const index = i + 1
    const height = window.innerHeight / 2;
    const width = window.innerWidth / 2;
    let x = 0;
    let y = 0;
    switch (index) {
        case 1: {
            x = window.innerWidth - window.innerWidth;
            y = window.innerHeight - window.innerHeight;
            break;
        }
        case 2: {
            x = window.innerWidth / 2;
            y = window.innerHeight - window.innerHeight;
            break;
        }

        case 3: {
            x = window.innerWidth - window.innerWidth;
            y = window.innerHeight / 2;
            break;
        }
        case 4: {
            x = window.innerWidth / 2;
            y = window.innerHeight / 2;
            break;
        }
        default: {
            x = window.innerWidth - window.innerWidth;
            y = window.innerHeight - window.innerHeight;
        }
    }
    return {
        modalSize: { width, height },
        modalPosition: { x, y }
    }
}

export function clickVariant2(i: number): IConfigModal {
    const index = i + 1
    const height = window.innerHeight;
    const width = window.innerWidth / 2;
    let x = 0;
    let y = window.innerHeight - window.innerHeight;
    switch (index) {
        case 1: {
            x = window.innerWidth - window.innerWidth;
            break;
        }
        case 2: {
            x = window.innerWidth / 2;
            break;
        }
        default: {
            x = window.innerWidth - window.innerWidth;
        }
    }
    return {
        modalSize: { width, height },
        modalPosition: { x, y }
    }
}