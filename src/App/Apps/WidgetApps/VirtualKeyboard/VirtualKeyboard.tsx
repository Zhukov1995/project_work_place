import React, { FunctionComponent, useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion';
import { IinitialState } from "../../../store/interfaces";
import KeyboardWrapper from "./KeyboardWrapper";
import styles from "./VirtualKeyboard.module.css";
import CloseIcon from "../../../simpleComponents/CloseIcon/CloseIcon";
import { toggleKeyboard } from "../../../store/actions";

const VirtualKeyboard: FunctionComponent = () => {
    const [input, setInput] = useState<string>("");
    const virtualKeyboardValue = useSelector<IinitialState, string>(state => state.virtualKeyboardValue);
    const isOpenKeyboard = useSelector<IinitialState, boolean>(state => state.isVirtualKeyboardOpen);
    const dispatch = useDispatch();

    const keyboardAnimation = {
        hidden: {
            y: 350,
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

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setInput(value);
    };

    useEffect(() => {
        setInput(virtualKeyboardValue);
    }, [virtualKeyboardValue]);

    return (
        <motion.div
            initial={'hidden'}
            animate={isOpenKeyboard ? 'visible' : 'hidden'}
            variants={keyboardAnimation}
            className={styles.wrapper}
            onMouseDown={(e) => { e.preventDefault() }}>
            <div className={styles.content}>
                <div className={styles['wrapper-close']}>
                    <CloseIcon click={() => dispatch(toggleKeyboard())} />
                </div>
                <input
                    tabIndex={-1}
                    value={input}
                    className={styles.input}
                    placeholder={"Tap on the virtual keyboard to start"}
                    onChange={(e) => onChangeInput(e)}
                />
                <KeyboardWrapper virtualKeyboardValue={virtualKeyboardValue} input={input} onChange={setInput} />
            </div>
        </motion.div>
    );
};

export default VirtualKeyboard;