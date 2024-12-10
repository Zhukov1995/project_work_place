import style from "./InfoSection.module.css";

const InfoSection = () => {
    return (
        <>
            <div className={style.title}>О продукте</div>
            <div className={style.content}>
                <p><b>WP_Marketplace</b> - это цифровая экосистема, которая объединяет сервисы, технологии и пользователей, чтобы последние бесшовно получали необходимые товары и услуги.</p>
                <p><b>Компания разработчик:</b> Techpeople</p>
                <p><b>Почта:</b> ask@techpeople.ru</p>
                <p><b>Версия приложения:</b> 0.1.0</p>
            </div>
        </>
    )
}

export default InfoSection;