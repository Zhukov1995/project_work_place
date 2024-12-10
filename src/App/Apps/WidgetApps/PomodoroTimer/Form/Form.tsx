import { useState } from "react";
import style from "./Form.module.css";

interface IForm {
    setIsTimerStart: any,
    setCopyFromOriginal: any
}

const Form = ({ setIsTimerStart, setCopyFromOriginal }: IForm) => {
    const [selectValue, setSelectValue] = useState<number>(1);
    const [inputValue, setInputValue] = useState<string>('');

    function handleChange(e: any, func: any) {
        func(e.target.value);
    }

    function clickButton() {
        setCopyFromOriginal(selectValue, inputValue);
        setIsTimerStart(true);
    }

    return (
        <div className={style.form}>
            <select
                name="time"
                className={style.select}
                defaultValue={selectValue}
                onChange={(e) => handleChange(e, setSelectValue)}>
                <option value="1">1мин.</option>
                <option value="5" >5мин.</option>
                <option value="10">10мин.</option>
                <option value="15">15мин.</option>
                <option value="20">20мин.</option>
                <option value="25">25мин.</option>
                <option value="30">30мин.</option>
                <option value="35">35мин.</option>
                <option value="40">40мин.</option>
                <option value="45">45мин.</option>
                <option value="50">50мин.</option>
                <option value="55">55мин.</option>
                <option value="60">60мин.</option>
            </select>

            <input
                type="text"
                className={style.input}
                placeholder="Уведомление 'Пора отдыхать'..."
                value={inputValue}
                onChange={(e) => handleChange(e, setInputValue)} />
            <button className={style['btn-start']} onClick={() => clickButton()}>Начать</button>
        </div>
    )
}

export default Form;
