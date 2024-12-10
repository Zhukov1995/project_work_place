import { useDispatch, useSelector } from "react-redux";
import { createModal, setZIndexTargetModal } from "../../store/actions";
import { IinitialState, IModal } from "../../store/interfaces";

import style from "./BtnOpenGallery.module.css";

const BtnOpenGallery = () => {
    const modalList = useSelector<IinitialState, IModal[]>(state => state.modalList);
    const appList = useSelector<IinitialState, IModal[]>(state => state.appList);
    const dispatch = useDispatch();

    function openGallery() {
        const modalIndex = modalList.findIndex(e => e.component && e.component === "Gallery");
        if (modalIndex === -1) {
            const appIndex = appList.findIndex(e => e.component && e.component === "Gallery");
            dispatch(createModal(appList[appIndex].id))
            setTimeout(() => {
                dispatch(setZIndexTargetModal(appList[appIndex].id))
            }, 0)

        }
    }
    return (
        <button
            className={style.button}
            onClick={() => openGallery()}>
            Выбрать из галлереи
        </button>
    )
}

export default BtnOpenGallery;