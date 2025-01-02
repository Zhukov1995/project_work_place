import React, { useState } from "react";
import style from "./Tabs.module.css";
import TabContent from "./TabsContent/TabContent";


const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const tabs = [
        'Дисплей',
        'Приложения',
        'Тема',
        'Язык и регион',
        'О продукте'
    ];

    const handleTabClick = (index: number) => {
        setSelectedTab(index);
    };


    return (
        <div className={style['tabs-wrapper']}>
            <ul className={style['tab-list']}>
                {tabs.map((tab, index) => (
                    <li
                        className={selectedTab === index ? `${style.tab} ${style["active-tab"]}` : style.tab}
                        onClick={() => handleTabClick(index)}
                        key={index}>
                        {tab}
                    </li>
                ))}
            </ul>
            <div className={style['section-wrapper']}>
                <TabContent selectedTab={selectedTab} />
            </div>
        </div>
    );
};

export default Tabs;