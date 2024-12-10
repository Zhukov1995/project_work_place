import { useMemo, useState } from "react";
import BtnOpenGallery from "../../../../../../simpleComponents/BtnOpenGallery/BtnOpenGallery";
import { storageStyle } from "../../../../../../utils/storageStyles";
import style from "./DisplaySection.module.css";

const DisplaySection = () => {
    const storageFilter = useMemo(() => getFilter(), []);

    const [percent, setPercent] = useState<number>(storageFilter.percent);
    const [optionValue, setOptionValue] = useState<string>(storageFilter.type);
    const [background, setBackground] = useState<string>('');


    function handleChange(e: any, func: any) {
        func(e.target.value);
    }


    const viewOptions = options.map((item, i) => {
        return <option value={item} key={i}>{item}</option>
    })

    const customStyle = {
        filter: `${optionValue}(${percent}%)`,
    }

    // установка на глобальном уровне
    function applySetting() {
        storageStyle.setStorageItemStyleValue('filter_app', `${optionValue}(${percent}%)`);
        storageStyle.syncStorageStyle();
    }
    // сброс на глобальном уровне
    function resetSetting() {
        storageStyle.setStorageItemStyleValue('filter_app', `brightness(100%)`);
        storageStyle.syncStorageStyle();
        setOptionValue('brightness');
        setPercent(100);
    }

    // устанавливаем фон рабочего стола
    function setBackGroundApp() {
        if (background.length) {
            storageStyle.setStorageItemStyleValue('background_app', `url(${background})`);
            storageStyle.syncStorageStyle();
        }
    }

    return (
        <>
            <div className={style.title}>Дисплей</div>
            <div className={style.content}>
                <div className={style.background} style={customStyle}>
                    <p>{window.screen.width} х {window.screen.height}</p>
                </div>
                <div className={style.controls}>
                    <div className={style['wrap-control']}>
                        <label htmlFor="select">Тип изменения</label>
                        <select
                            name="select"
                            id="select"
                            value={optionValue}
                            onChange={(e) => handleChange(e, setOptionValue)}>
                            {viewOptions}
                        </select>
                    </div>
                    <div className={style['wrap-control']}>
                        <label htmlFor="select">Процент</label>
                        <input
                            onChange={(e) => handleChange(e, setPercent)}
                            value={percent}
                            name="range"
                            type="range"
                            min={10}
                            max={100}
                            step={10} />
                        <span>{percent} %</span>
                    </div>
                    <div className={style['wrap-control']}>
                        <button className={style['btn-apply']} onClick={() => applySetting()}>Применить</button>
                        <button className={style['btn-reset']} onClick={() => resetSetting()}>Сбросить</button>
                    </div>
                    <div className={style['wrap-control']}>
                        <label htmlFor="text">Фоновое изображение</label>
                        <input
                            value={background}
                            onChange={(e) => handleChange(e, setBackground)}
                            placeholder="URL картинки..."
                            name="text"
                            type="text" />
                    </div>
                    <div className={style['wrap-control']}>
                        <button className={style['btn-apply']} onClick={() => setBackGroundApp()}>Применить</button>
                        <button className={style['btn-reset']} onClick={() => setBackground('')}>Очистить ввод</button>
                        <BtnOpenGallery />
                    </div>
                </div>

            </div>
        </>
    )
}

export default DisplaySection;



var options = [
    "brightness",
    "contrast",
    "grayscale",
    "invert",
    "opacity",
    "saturate",
    "sepia"
];

// получаем значение из storage и разбираем его на ключи
function getFilter() {
    const filter = storageStyle.getRootStyleValue('--filter-app');
    let targetFilter: { type: string, percent: number } = { type: '', percent: 100 };
    options.forEach((item => {
        if (filter.includes(item)) targetFilter.type = item
    }))
    let percent = filter.match(/\d+/);
    targetFilter.percent = percent ? Number(percent) : 100
    return targetFilter
}
