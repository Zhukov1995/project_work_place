import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import { ru } from 'date-fns/locale';
import { IinitialState } from '../../../store/interfaces';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


import 'react-day-picker/dist/style.css';
import { cssInnerHTML, customStyle } from './CustomStyle';
import style from './Calendar.module.css';


const Calendar = () => {
    const [selected, setSelected] = useState<Date>();
    const valueCalendar = useSelector<IinitialState, boolean>(state => state.isCalendarOpen);

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
            <style>{cssInnerHTML}</style>
            <DayPicker
                locale={ru}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                modifiersClassNames={{
                    selected: 'my-selected',
                    today: 'my-today'
                }}
                styles={customStyle}
            />
        </motion.div>
    );
}

export default Calendar;