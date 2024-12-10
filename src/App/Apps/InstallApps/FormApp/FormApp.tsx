import InputVirtualKeyboard from "../../../simpleComponents/InputVirtualKeyboard/InputVirtualKeyboard";
import styles from "./FormApp.module.css";

const FormApp = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Тест форма</h2>
                <InputVirtualKeyboard inputName='test' isLabel={false} placeholder="Имя" />
                <InputVirtualKeyboard inputName='test1' isLabel={false} placeholder="Фамилия" />
                <InputVirtualKeyboard inputName='test2' isLabel={false} placeholder="Номер телефона" />
                <InputVirtualKeyboard inputName='test3' isLabel={false} placeholder="Почта" />
            </div>
        </div>
    )
}

export default FormApp