import {
    clickVariant1,
    clickVariant2
} from "./func";
import { IConfigModalProps } from "./interface";
import style from "./PositionController.module.css";


const PositionController = ({ setModalConfig, setIsOpenModalConfig }: IConfigModalProps) => {

    function clickConfig(i: number, func: any) {
        const config = func(i);
        setModalConfig(config.modalSize, config.modalPosition);
        setIsOpenModalConfig(false);
    }

    const arrVariant1 = ['', '', '', ''];
    const viewVariant1 = arrVariant1.map((e, i) => {
        return <div
            onClick={() => clickConfig(i, clickVariant1)}
            key={i}
            className={style['variant-1-item']}
        ></div>
    })

    const arrVariant2 = ['', ''];
    const viewVariant2 = arrVariant2.map((e, i) => {
        return <div
            onClick={() => clickConfig(i, clickVariant2)}
            key={i}
            className={style['variant-2-item']}
        ></div>
    })

    return (
        <div className={style.wrapper}>
            <div className={style['variant-1']}>
                {viewVariant1}
            </div>
            <div className={style['variant-2']}>
                {viewVariant2}
            </div>
        </div>
    )
}

export default PositionController;