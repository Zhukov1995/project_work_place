interface ITheme {
    main_theme_bg: string,
    main_theme_sub_bg: string,
    main_theme_icon: string,
    main_theme_color: string,
    main_theme_hover_color: string,
}

interface IThemeItem {
    name: string,
    theme: ITheme
}

export const themes: IThemeItem[] = [
    {
        name: 'Темный',
        theme: {
            main_theme_bg: 'rgb(38,38,38)',
            main_theme_sub_bg: '#363636',
            main_theme_icon: 'white',
            main_theme_color: 'white',
            main_theme_hover_color: 'rgb(75, 170, 75)'
        }
    },
    {
        name: 'Темный полупрозрачный',
        theme: {
            main_theme_bg: 'rgb(38,38,38,0.9)',
            main_theme_sub_bg: '#363636',
            main_theme_icon: 'white',
            main_theme_color: 'white',
            main_theme_hover_color: 'rgb(75, 170, 75)'
        }
    },
    {
        name: 'Светлый',
        theme: {
            main_theme_bg: 'rgb(230,230,230)',
            main_theme_sub_bg: 'white',
            main_theme_icon: 'black',
            main_theme_color: 'black',
            main_theme_hover_color: 'rgb(75, 170, 75)'
        }
    },
    {
        name: 'Светлый полупрозрачный',
        theme: {
            main_theme_bg: 'rgb(230,230,230,0.9)',
            main_theme_sub_bg: 'white',
            main_theme_icon: 'black',
            main_theme_color: 'black',
            main_theme_hover_color: 'rgb(75, 170, 75)'
        }
    },
    {
        name: 'Красочный и сбалансированный',
        theme: {
            main_theme_bg: '#41B3A3',
            main_theme_sub_bg: '#85DCBB',
            main_theme_icon: 'black',
            main_theme_color: 'white',
            main_theme_hover_color: '#E27D60'
        }
    },
    {
        name: 'Яркие акценты',
        theme: {
            main_theme_bg: '#242582',
            main_theme_sub_bg: '#2F2FA2',
            main_theme_icon: 'white',
            main_theme_color: 'white',
            main_theme_hover_color: '#F64C72'
        }
    },
    {
        name: 'Небесный',
        theme: {
            main_theme_bg: '#659dbd',
            main_theme_sub_bg: '#d8d8d7',
            main_theme_icon: 'white',
            main_theme_color: 'black',
            main_theme_hover_color: '#8D8741'
        }
    },
    {
        name: 'Прохладный и свежий',
        theme: {
            main_theme_bg: '#5CDB95',
            main_theme_sub_bg: '#EDF5E1',
            main_theme_icon: '#05386B',
            main_theme_color: '#05386B',
            main_theme_hover_color: '#379683'
        }
    },
    {
        name: 'Персик',
        theme: {
            main_theme_bg: '#FFB48F',
            main_theme_sub_bg: '#F5E6CC',
            main_theme_icon: 'black',
            main_theme_color: 'black',
            main_theme_hover_color: '#FCCD04'
        }
    }
]