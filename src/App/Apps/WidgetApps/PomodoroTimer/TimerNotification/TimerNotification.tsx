import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import style from "./TimerNotification.module.css";

interface ITimerNotification {
    text: string,
    setIsModal: any,
    setIsTimerStart: any,
    isModal: boolean
}

const TimerNotification = ({ text, setIsModal, setIsTimerStart, isModal }: ITimerNotification) => {
    const modalDiv = document.getElementById('timer-notification');

    if (!modalDiv) {
        throw new Error('PORTAL_ERROR');
    }

    const TimerAnimation = {
        hidden: {
            y: -110,
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

    const viewText = text.length > 0 ? text : 'Пора отдыхать'

    function clickButton() {
        setIsTimerStart(false);
        setIsModal(false)
    }

    return createPortal(
        (
            <motion.div
                initial={'hidden'}
                exit={{ opacity: 0 }}
                animate={isModal ? 'visible' : 'hidden'}
                variants={TimerAnimation}
                className={style.wrapper}>
                <div className={style['sub-wrapper']}>
                    <div>
                        <p>{viewText}</p>
                        <button onClick={() => clickButton()}>Спасибо</button>
                    </div>
                </div>
            </motion.div>
        ), modalDiv
    )


}

export default TimerNotification;