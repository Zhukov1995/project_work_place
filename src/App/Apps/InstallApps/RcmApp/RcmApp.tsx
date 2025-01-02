import style from "./RcmApp.module.css";

const RcmApp = () => {
    return (
        <div className={style.alert}>
            {/* <span>Тестовая интеграция!!!</span> */}
            <iframe src="https://rcmdeep.com/" frameBorder="0" style={{width: '100%', height: '100%'}}></iframe>
        </div>
    )
}

export default RcmApp;