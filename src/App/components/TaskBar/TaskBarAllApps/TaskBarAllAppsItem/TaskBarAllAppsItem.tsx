import { useDispatch } from "react-redux";
import { createModal, setZIndexTargetModal } from "../../../../store/actions";
import { IModal } from "../../../../store/interfaces";
import style from "./TaskBarAllAppsItem.module.css";

interface ILabelItem {
    app: IModal,
}

const TaskBarAllAppsItem = ({ app }: ILabelItem) => {
    const dispatch = useDispatch();

    function createAppModal() {
        if (!app.config.isOpen) {
            dispatch(createModal(app.id));
            dispatch(setZIndexTargetModal(app.id));
        }
    }

    const shortName = app.name.length > 20 ? app.name.slice(0, 20) + '...' : app.name;

    return (
        <div
            onDoubleClick={() => createAppModal()}
            className={style['label-app']}
            title={app.name}>
            <img
                src={app.logo}
                alt={app.name}
                className={style['label-app-img']} />
            <p className={style['label-app-title']}>{shortName}</p>
        </div >
    )
}

export default TaskBarAllAppsItem;