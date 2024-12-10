type keyStyle = 'background_app' | 'filter_app' | 'main_theme_bg' | 'main_theme_sub_bg' | 'main_theme_icon' | 'main_theme_icon' | 'main_theme_color' | 'main_theme_hover_color' | 'font_family'

function getRootStyleValue(variable: string) {
    return getComputedStyle(document.body).getPropertyValue(variable);
}

export { }

function createStorageStyle() {
    if (!localStorage.getItem('WP_ROOT_STYLE')) {
        const style = {
            background_app: getRootStyleValue('--background-app'),
            filter_app: getRootStyleValue('--filter-app'),
            main_theme_bg: getRootStyleValue('--main-theme-bg'),
            main_theme_sub_bg: getRootStyleValue('--main-theme-sub-bg'),
            main_theme_icon: getRootStyleValue('--main-theme-icon'),
            main_theme_color: getRootStyleValue('--main-theme-color'),
            main_theme_hover_color: getRootStyleValue('--main-theme-hover-color'),
            font_family: getRootStyleValue('--font-family'),
            red: getRootStyleValue('--red')
        }
        localStorage.setItem('WP_ROOT_STYLE', JSON.stringify(style));
    }
}

function setStorageItemStyleValue(key: keyStyle, value: any) {
    const style = JSON.parse(localStorage.getItem('WP_ROOT_STYLE') || '{}');
    style[key] = value;
    localStorage.removeItem('WP_ROOT_STYLE');
    localStorage.setItem('WP_ROOT_STYLE', JSON.stringify(style));
}

function syncStorageStyle() {
    if (localStorage.getItem('WP_ROOT_STYLE')) {
        const storageStyle = JSON.parse(localStorage.getItem('WP_ROOT_STYLE') || '{}');

        const docStyle = document.documentElement.style;
        docStyle.setProperty('--background-app', storageStyle.background_app);
        docStyle.setProperty('--filter-app', storageStyle.filter_app);
        docStyle.setProperty('--main-theme-bg', storageStyle.main_theme_bg);
        docStyle.setProperty('--main-theme-sub-bg', storageStyle.main_theme_sub_bg);
        docStyle.setProperty('--main-theme-icon', storageStyle.main_theme_icon);
        docStyle.setProperty('--main-theme-color', storageStyle.main_theme_color);
        docStyle.setProperty('--main-theme-hover-color', storageStyle.main_theme_hover_color);
        docStyle.setProperty('--font-family', storageStyle.font_family);
        docStyle.setProperty('--red', storageStyle.red);
    }
}

interface ITheme {
    main_theme_bg: string,
    main_theme_sub_bg: string,
    main_theme_icon: string,
    main_theme_color: string,
    main_theme_hover_color: string,
}

function setStorageTheme(theme: ITheme) {
    setStorageItemStyleValue('main_theme_bg', theme.main_theme_bg);
    setStorageItemStyleValue('main_theme_sub_bg', theme.main_theme_sub_bg);
    setStorageItemStyleValue('main_theme_icon', theme.main_theme_icon);
    setStorageItemStyleValue('main_theme_color', theme.main_theme_color);
    setStorageItemStyleValue('main_theme_hover_color', theme.main_theme_hover_color);
    syncStorageStyle();
}

export const storageStyle = {
    createStorageStyle,
    setStorageItemStyleValue,
    syncStorageStyle,
    setStorageTheme,
    getRootStyleValue
}