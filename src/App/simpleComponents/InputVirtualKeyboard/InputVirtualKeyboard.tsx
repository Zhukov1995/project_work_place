import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVirtualKeyboardValue } from "../../store/actions";
import { IinitialState } from "../../store/interfaces";
import style from "./InputVirtualKeyboard.module.css";

interface IProps {
    placeholder?: string
    inputName: string
    isLabel: boolean,
    labelText?: string

}

const InputVirtualKeyboard = ({ placeholder = "", inputName, isLabel = true, labelText }: IProps) => {
    const [value, setValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const virtualKeyBoardValue = useSelector<IinitialState, string>(state => state.virtualKeyboardValue)
    const dispatch = useDispatch();

    function handleChange(e: any) {
        setValue(e.target.value);
        dispatch(setVirtualKeyboardValue(e.target.value));
    }

    function onFocusInput() {
        // устанавливаем текущее значение инпута в глобальный стейт
        dispatch(setVirtualKeyboardValue(value));
        setIsFocus(true);
    }

    function onBlurInput() {
        // устанавливаем текущее значение инпута в глобальный стейт
        dispatch(setVirtualKeyboardValue(""));
        setIsFocus(false);
    }

    useEffect(() => {
        if (isFocus) {
            setValue(virtualKeyBoardValue)
        }
    }, [virtualKeyBoardValue, isFocus])

    return (
        <>
            {isLabel && <label htmlFor={inputName}>{labelText}</label>}
            <input
                name={inputName}
                id={inputName}
                type="text"
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                onChange={(e) => handleChange(e)}
                onFocus={() => onFocusInput()}
                onBlur={() => onBlurInput()} />
        </>
    )
}

export default InputVirtualKeyboard;