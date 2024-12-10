import Loader from "react-ts-loaders/dist";
import style from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={style.wrapper}>
            <Loader
                type="dualring"
                color="var(--main-theme-icon)"
                size={50}
            />
        </div>
    )
}

export default Spinner;