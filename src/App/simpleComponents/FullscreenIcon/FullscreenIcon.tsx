import { useDispatch } from "react-redux";

import { toggleFullscreen } from "../../store/actions";

import style from "./FullscreenIcon.module.css";

interface IFullscreen {
    id: number,
}

const FullscreenIcon = ({ id }: IFullscreen) => {
    const dispatch = useDispatch();


    return (
        <div
            className={style.wrap}
            onClick={() => dispatch(toggleFullscreen(id))}>
            <svg width="13px" height="13px" viewBox="0 0 32 32" id="i-fullscreen" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--main-theme-icon)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28" />
            </svg>
        </div>
    )
}

export default FullscreenIcon;