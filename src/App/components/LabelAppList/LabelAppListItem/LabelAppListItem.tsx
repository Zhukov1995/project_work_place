import { motion, useDragControls } from "framer-motion";
import { useDispatch } from "react-redux";
import { createModal, setZIndexTargetModal } from "../../../store/actions";
import { IModal } from "../../../store/interfaces";
import style from "./LabelAppListItem.module.css";

interface ILabelItem {
    parentRef: any,
    app: IModal,
}

const LabelAppListItem = ({ app, parentRef }: ILabelItem) => {
    const dispatch = useDispatch();
    const controls = useDragControls();

    function createAppModal() {
        if (!app.config.isOpen) {
            dispatch(createModal(app.id));
            dispatch(setZIndexTargetModal(app.id));
        }
    }

    const shortName = app.name.length > 20 ? app.name.slice(0, 20) + '...' : app.name;

    return (
        <motion.div
            drag={false}
            dragConstraints={parentRef}
            dragControls={controls}
            dragElastic={0}
            dragMomentum={false}
            onDoubleClick={() => createAppModal()}
            className={style['label-app']}
            title={app.name}>
            <img
                src={app.logo}
                alt={app.name}
                onPointerDown={(e) => e.preventDefault()}
                className={style['label-app-img']} />
            <p className={style['label-app-title']}>{shortName}</p>
        </motion.div >
    )
}

export default LabelAppListItem;