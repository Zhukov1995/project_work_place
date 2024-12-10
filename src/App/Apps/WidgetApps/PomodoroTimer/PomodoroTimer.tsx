import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IinitialState } from "../../../store/interfaces";
import CountDown from "./CountDown/CountDown";
import Form from "./Form/Form";
import style from "./PomodoroTimer.module.css";
import TimerNotification from "./TimerNotification/TimerNotification";


const PomodoroTimer = () => {
    const valueCalendar = useSelector<IinitialState, boolean>(state => state.isCalendarOpen);
    const [copySelectValue, setCopySelectValue] = useState<number>(5);
    const [copyInputValue, setCopyInputValue] = useState<string>('');
    const [isTimerStart, setIsTimerStart] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);

    function setCopyFromOriginal(selectOriginal: number, inputOriginal: string) {
        setCopyInputValue(inputOriginal);
        setCopySelectValue(selectOriginal);
    }



    const pomodorotimerAnimation = {
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
            variants={pomodorotimerAnimation}
            className={style.wrapper}>
            <div className={style.content}>
                <p className={style.title}>Тайм менеджмент</p>
                {!isTimerStart ?
                    <Form
                        setIsTimerStart={setIsTimerStart}
                        setCopyFromOriginal={setCopyFromOriginal}
                    />
                    :
                    <CountDown
                        setIsTimerStart={setIsTimerStart}
                        setIsModal={setIsModal}
                        minutes={copySelectValue}
                    />
                }
                {isModal ?
                    <TimerNotification
                        setIsModal={setIsModal}
                        setIsTimerStart={setIsTimerStart}
                        isModal={isModal}
                        text={copyInputValue} />
                    : null}
            </div>
        </motion.div >
    );
}

export default PomodoroTimer;