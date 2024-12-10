import { useDispatch } from "react-redux";
import { toggleAllAppsOpen } from "../../store/actions";
import style from "./BtnOpenAllApps.module.css";

const BtnOpenAllApps = () => {
    const dispatch = useDispatch();

    return (
        <div className={style.wrapper}>
            <div
                onClick={() => dispatch(toggleAllAppsOpen())}
                className={style.icon}
                title="Все приложения">
            </div>
        </div>
    )
}

export default BtnOpenAllApps;