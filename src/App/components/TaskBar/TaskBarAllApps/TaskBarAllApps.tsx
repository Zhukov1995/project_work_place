import { useSelector } from "react-redux";
import { IinitialState, IModal } from "../../../store/interfaces";
import TaskBarAllAppsItem from "./TaskBarAllAppsItem/TaskBarAllAppsItem";

import style from './TaskBarAllApps.module.css';
import { motion } from "framer-motion";

const TaskBarAllApps = () => {
    const labelsApp = useSelector<IinitialState, IModal[]>(state => state.appList);
    const toggleAllApps = useSelector<IinitialState, boolean>(state => state.isAllAppsOpen);

    const allAppsAnimation = {
        hidden: {
            x: '-110%',
            transition: {
                delay: 0.2
            },
        },
        visible: () => ({
            x: 0,
            transition: {
                delay: 0.2
            }
        })
    };


    const viewAllApps = labelsApp.map(app => {
        return <TaskBarAllAppsItem app={app} key={app.id} />
    })
    return (
        <motion.div
            initial={'hidden'}
            animate={toggleAllApps ? 'visible' : 'hidden'}
            variants={allAppsAnimation}
            className={style.wrapper}>
            {viewAllApps}
        </motion.div>
    )
}

export default TaskBarAllApps;



