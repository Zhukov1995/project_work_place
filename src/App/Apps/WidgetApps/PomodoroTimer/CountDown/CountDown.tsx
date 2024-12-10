import { useEffect, useState } from "react";
import style from "./CountDown.module.css";

interface ICountDown {
    hours?: number,
    minutes: number,
    seconds?: number,
    setIsTimerStart: any,
    setIsModal: any
}

const CountDown = ({ hours = 0, minutes = 0, seconds = 0, setIsTimerStart, setIsModal }: ICountDown) => {
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [[h, m, s], setTime] = useState<number[]>([hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;

        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
            setIsModal(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    useEffect(() => {
        setTime([hours, minutes, seconds]);
    }, [])


    return (
        <div className={style.wrapper}>
            <p>{`${h.toString().padStart(2, '0')}:${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
            <div className={style['wrapper-button']}>
                <button onClick={() => setPaused(!paused)}>
                    {paused ? 'Продолжить' : 'Пауза'}
                </button>
                <button onClick={() => setIsTimerStart(false)}>Сбросить</button>
            </div>
        </div>
    );
};

export default CountDown;