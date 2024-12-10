import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { closeModal, setZIndexTargetModal, toggleRollup } from '../../../../store/actions';
import { ITaskApp } from './interface';

import style from './TaskBarListItem.module.css';


const TaskBarListItem = ({ app }: ITaskApp) => {
    const dispatch = useDispatch();

    // сворачиваем приложение
    function setToggleRollup(id: number) {
        if (!app.config.rollup && app.config.zIndex !== 2) {
            dispatch(setZIndexTargetModal(id))
        } else {
            dispatch(toggleRollup(id))
            if (!app.config.rollup) {
                dispatch(setZIndexTargetModal(id))
            }
        }
    }

    const styleWidth = app.config.zIndex > 1 ? '15px' : '5px';

    return (
        <motion.li
            exit={{ opacity: 0, y: 50 }}
            title={app.name}
            className={style['task-list-item']} >
            <img
                src={app.logo}
                alt={app.name}
                onDoubleClick={() => dispatch(closeModal(app.id))}
                onClick={() => setToggleRollup(app.id)}
                className={style['task-list-app']} />
            {
                !app.config.rollup
                &&
                <div
                    style={{ width: styleWidth }}
                    className={style['task-list-circle']}></div>
            }
        </motion.li >
    )
}

export default TaskBarListItem;