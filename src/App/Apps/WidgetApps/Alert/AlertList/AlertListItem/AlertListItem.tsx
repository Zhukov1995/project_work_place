import { useEffect, useRef, useState } from 'react';
import style from './AlertListItem.module.css';
import CloseIcon from '../../../../../simpleComponents/CloseIcon/CloseIcon';
import ArrowIcon from '../../../../../simpleComponents/ArrowIcon/ArrowIcon';

function truncateStr(str:string, flag:boolean) {
    if(flag && str.length > 50) {
        return str.slice(0,50) + ' ...';
    }
    return str;
}

interface IProps {
    title: string,
    text: string
}

const AlertListItem = ({title,text}:IProps) => {
    const [rollUp,setRollUp] = useState(true);
    const ref = useRef(null);

    const isBtnClass = rollUp ? style.visible : style.hidden;

    useEffect(() => {
        if(ref.current && !rollUp) {
            ref.current.style.height = 'auto';
        } else if(ref.current && rollUp) {
            ref.current.style.height = '45px';
        }
    },[rollUp]);

    const customText = truncateStr(text, rollUp);

    return (
    <li className={style.wrapper}>
        <p className={style.title}>{title}</p>
        <p className={style.text} ref={ref}>{customText}</p>
        <div className={style.footer}>
            <CloseIcon 
                
                click={() => {}}
            />
            <button
                className={`${style.button} ${isBtnClass}`}
                onClick={() => setRollUp(!rollUp)}
            >
                <ArrowIcon fill='var(--main-theme-icon)'/>
            </button>
        </div>
    </li>
    );
}

export default AlertListItem;