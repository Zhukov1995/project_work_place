import styles from "./AuthPage.module.css";

const AuthPage = () => {
    return (
        <div className={styles.wrapper}>
            <form action="#">
                <h3>Вход</h3>
                <p>Уникальная технология доступная для вашего бизнеса уже сейчас!</p>
                <input type="text" placeholder="Логин" />
                <input type="password" placeholder="Пароль" />
                <button>Войти</button>
            </form>
        </div>
    )
}

export default AuthPage;