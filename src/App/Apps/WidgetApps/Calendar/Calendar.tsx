import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import { ru } from 'date-fns/locale';

import 'react-day-picker/dist/style.css';
import { cssInnerHTML, customStyle } from './CustomStyle';
import style from './Calendar.module.css';


const Calendar = () => {
    const [selected, setSelected] = useState<Date>();

    return (
    <div className={style.wrapper}>
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
    </div>
    );
}

export default Calendar;