

export const cssInnerHTML = `
        .my-selected:hover:not([disabled]) { 
            color: white;
        }
        .my-today { 
            font-weight: bold;
            font-size: 140%; 
            color: #b15555;
        }
        .rdp-day:hover {
            background-color: var(--main-theme-hover-color) !important;
        }
        .rdp-nav_button:hover {
            background-color: var(--main-theme-hover-color) !important;
        }
`;

export const customStyle = {
    caption: { color: "var(--main-theme-color)" },
    head: { color: "var(--main-theme-color)" },
    row: { color: "var(--main-theme-color)" },
    today: { color: "var(--red)" }
}