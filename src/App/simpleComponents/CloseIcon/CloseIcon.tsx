import style from "./CloseIcon.module.css";

interface IClose {
    click: any
}


const CloseIcon = ({ click }: IClose) => {
    return (
        <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={click}
            className={style.svg}>
            <rect width="24" height="24" className={style.rect} />
            <path d="M7 17L16.8995 7.10051" stroke="var(--main-theme-icon)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7.00001L16.8995 16.8995" stroke="var(--main-theme-icon)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CloseIcon;