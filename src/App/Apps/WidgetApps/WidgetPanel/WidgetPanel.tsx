import { IinitialState } from '../../../store/interfaces';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { Suspense } from 'react';
import { LoadingFallback } from '../../../utils/fallback';

import Calendar from '../Calendar/Calendar';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import Clock from '../Clock/Clock';

import style from './WidgetPanel.module.css'
import Alert from '../Alert/Alert';


const WidgetPanel = () => {
    const valueCalendar = useSelector<IinitialState, boolean>(state => state.isWidgetPanelOpen);

    const calendarAnimation = {
        hidden: {
            x: 350,
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

    return (
        <motion.div
            initial={'hidden'}
            animate={valueCalendar ? 'visible' : 'hidden'}
            variants={calendarAnimation}
            className={style.wrapper}>
            <Suspense fallback={<LoadingFallback />}>
                <Calendar />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <PomodoroTimer />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <Clock />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <Alert />
            </Suspense>
        </motion.div>
    );
}

export default WidgetPanel;