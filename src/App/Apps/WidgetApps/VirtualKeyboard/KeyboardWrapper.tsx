import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { setVirtualKeyboardValue } from "../../../store/actions";

interface IProps {
    onChange: React.Dispatch<React.SetStateAction<string>>;
    virtualKeyboardValue: string
    input: string
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
    onChange,
    virtualKeyboardValue
}) => {
    const [layoutName, setLayoutName] = useState("default");
    const dispatch = useDispatch();

    const onKeyPress = (button: string) => {
        if (button === "{shift}" || button === "{lock}") {
            setLayoutName(layoutName === "default" ? "shift" : "default");
        } else if (button === "{space}") {
            onChange(p => p + " ")
            dispatch(setVirtualKeyboardValue(virtualKeyboardValue + " "));
        } else if (button === "{bksp}") {
            onChange(p => p.substring(0, p.length - 1));
            dispatch(setVirtualKeyboardValue(virtualKeyboardValue.substring(0, virtualKeyboardValue.length - 1)));
        } else if (button === "{tab}") {
            console.log('press tab')
        } else {
            onChange(p => p + button);
            dispatch(setVirtualKeyboardValue(virtualKeyboardValue + button));
        }
    };

    return (
        <Keyboard
            layoutName={layoutName}
            onKeyPress={onKeyPress}
            onRender={() => console.log("Rendered Keyboard")}
        />
    );
};

export default KeyboardWrapper;