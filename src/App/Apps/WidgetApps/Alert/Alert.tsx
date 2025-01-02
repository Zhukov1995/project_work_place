import style from './Alert.module.css';
import AlertList from './AlertList/AlertList';


const Alert = () => {

    return (
    <div className={style.wrapper}>
        <p className={style.title}>Уведомления</p>
        <AlertList/>
    </div>
    );
}

export default Alert;