import { useDispatch, useSelector } from "react-redux";

import { closeWidgetPanel, toggleAllAppsOpen, toggleTaskBar } from "../../store/actions";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { IinitialState } from "../../store/interfaces";

import style from './BtnToggleTaskBar.module.css';
import { useEffect } from "react";


const BtnToggleTaksBar = () => {
    const valueBtn = useSelector<IinitialState, boolean>(state => state.isOpenTaskBar);
    const valueBtnAllApps = useSelector<IinitialState, boolean>(state => state.isAllAppsOpen);
    const dispatch = useDispatch();

    // управляем анимацтей стрелки
    const isBtnClass = valueBtn ? style.visible : style.hidden;
    // управляем цветом стрелки при анимации
    const colorArrow = valueBtn ? 'var(--main-theme-icon)' : 'var(--main-theme-icon)';

    useEffect(() => {
        if (!valueBtn) {
            dispatch(closeWidgetPanel())
            if (valueBtnAllApps) {
                dispatch(toggleAllAppsOpen())
            }
        }
    }, [valueBtn])

    return (
        <button
            className={`${style.button} ${isBtnClass}`}
            onClick={() => dispatch(toggleTaskBar())}>
            <ArrowIcon fill={colorArrow} />
        </button>
    )
}

export default BtnToggleTaksBar;