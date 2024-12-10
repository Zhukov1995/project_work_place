import style from "./ThemeSection.module.css";
import { storageStyle } from "../../../../../../utils/storageStyles";
import { themes } from "../../../../../../data/themes";

const ThemeSection = () => {

    const viewThemes = themes.map((item, index) => {
        return <li className={style['theme-item']} key={index} onClick={() => storageStyle.setStorageTheme(item.theme)}>
            {item.name}
            <div className={style['theme-colors']}>
                <div style={{ background: item.theme.main_theme_bg }}></div>
                <div style={{ background: item.theme.main_theme_color }}></div>
                <div style={{ background: item.theme.main_theme_hover_color }}></div>
                <div style={{ background: item.theme.main_theme_icon }}></div>
                <div style={{ background: item.theme.main_theme_sub_bg }}></div>
            </div>
        </li>
    })
    return (
        <>
            <div className={style.title}>Тема</div>
            <div className={style.content}>
                <ul>
                    {viewThemes}
                </ul>
            </div>
        </>
    )
}

export default ThemeSection;