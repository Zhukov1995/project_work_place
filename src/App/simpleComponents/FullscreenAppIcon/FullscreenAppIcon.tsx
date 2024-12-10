import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFullscreenApp } from "../../store/actions";
import { IinitialState } from "../../store/interfaces";
import style from "./FullscreenAppIcon.module.css";

const FullscreenAppIcon = () => {
    const isFullscreenApp = useSelector<IinitialState, boolean>(state => state.isFullscreenApp);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFullscreenApp) {
            fullScreen(document.body);
        } else if (document.fullscreenElement) {
            document.exitFullscreen()
        }
    }, [isFullscreenApp]);

    // интерпритация для разных браузеров
    function fullScreen(element: any) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitrequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullscreen) {
            element.mozRequestFullScreen();
        }
    }

    const title = isFullscreenApp ? 'выйти из полноэкранного режима' : 'полноэкранный режим';

    return (
        <div
            className={style.wrap}
            title={title}
            onClick={() => dispatch(toggleFullscreenApp())}>
            <svg width="20px" height="20px" viewBox="0 0 32 32" id="i-fullscreen" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--main-theme-icon)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28" />
            </svg>
        </div>
    )
}

export default FullscreenAppIcon;