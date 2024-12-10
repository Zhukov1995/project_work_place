import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

import TaskBarListItem from './TaskBarListItem/TaskBarListItem';
import { IinitialState, IModal } from '../../../store/interfaces';

import style from './TaskBarList.module.css';

const TaskBarList = () => {
    const taskList = useSelector<IinitialState, IModal[]>(state => state.modalList);

    const viewTaskList = taskList.map((app: IModal) => {
        return <TaskBarListItem key={app.id} app={app} />
    });

    return (
        <ul className={style['task-list']}>
            <AnimatePresence>
                {viewTaskList}
            </AnimatePresence>
        </ul>
    )
}

export default TaskBarList;