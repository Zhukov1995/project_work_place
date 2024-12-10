import { useDispatch } from "react-redux";

import { toggleRollup } from "../../store/actions";

import style from "./RollupIcon.module.css";

interface IRollup {
    id: number
}

const RollupIcon = ({ id }: IRollup) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => dispatch(toggleRollup(id))}
            className={style.wrap}>
            <svg width="13px" height="13px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="layer1">
                    <path d="M 2 10 L 2 11 L 17 11 L 17 10 L 2 10 z " style={{ fill: "var(--main-theme-icon)", fillOpacity: 1, stroke: "none", strokeWidth: "0px" }} />
                </g>
            </svg>
        </div>
    )
}

export default RollupIcon;