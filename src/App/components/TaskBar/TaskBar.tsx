import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from 'react';

import SettingIcon from '../../simpleComponents/SettingIcon/SettingIcon';
import TaskBarList from './TaskBarList/TaskBarList';
import { IinitialState } from "../../store/interfaces";

import style from "./TaskBar.module.css";
import FullscreenAppIcon from '../../simpleComponents/FullscreenAppIcon/FullscreenAppIcon';
import CalendarIcon from '../../simpleComponents/CalendarIcon/CalendarIcon';
import BtnOpenAllApps from '../../simpleComponents/BtnOpenAllApps/BtnOpenAllApps';
import KeyboardIcon from '../../simpleComponents/KeyboardIcon/KeyboardIcon';
import { toggleKeyboard } from '../../store/actions';


const VirtualKeyboard = lazy(() => import('../../Apps/WidgetApps/VirtualKeyboard/VirtualKeyboard'));

const TaskBar = (): JSX.Element => {
    const valueBtn = useSelector<IinitialState, boolean>(state => state.isOpenTaskBar);
    const dispatch = useDispatch();

    const footerAnimation = {
        hidden: {
            y: 55,
            transition: {
                delay: 0.2
            },
        },
        visible: () => ({
            y: 0,
            transition: {
                delay: 0.2
            }
        })
    };

    return (
        <motion.footer
            initial={'visible'}
            animate={valueBtn ? 'visible' : 'hidden'}
            variants={footerAnimation}
            className={style.taskbar}>
            <div className={style['sub-taskbar']}>
                <Suspense fallback={<Loading />}>
                    <VirtualKeyboard />
                </Suspense>
                <BtnOpenAllApps />
                <TaskBarList />
                <SettingIcon />
                <KeyboardIcon click={() => dispatch(toggleKeyboard())} />
                <CalendarIcon />
                <FullscreenAppIcon />
            </div>
        </motion.footer>
    )
}

export default TaskBar;

const Loading = () => {
    return null
}