import { useState } from "react";
import { useSelector } from "react-redux";
import { IinitialState, IModal } from "../../../../../../store/interfaces";
import AppSectionItem from "./AppSectionItem/AppSectionItem";
import style from "./AppsSection.module.css";

const AppsSection = () => {
    const apps = useSelector<IinitialState, IModal[]>(state => state.appList);
    const [openSettingApp, setOpenSettingApp] = useState<boolean>(false);


    const viewDefaultApps = apps.filter(app => app.default).map((app, i) => {
        return <AppSectionItem app={app} openSettingApp={openSettingApp} key={i} />
    })

    const viewInstallApps = apps.filter(app => !app.default && app.component).map((app, i) => {
        return <AppSectionItem app={app} openSettingApp={openSettingApp} key={i} />
    })

    const viewDevelopApps = apps.filter(app => !app.component).map((app, i) => {
        return <AppSectionItem app={app} openSettingApp={openSettingApp} key={i} />
    })
    return (
        <>
            <div className={style.title}>Приложения</div>
            <div className={style.content}>
                <div className={style.system}>
                    <div>Системные приложения</div>
                    <ul className={style['system-list']}>{viewDefaultApps}</ul>
                </div>
                <div className={style.install}>
                    <div>Установленные приложения</div>
                    <ul className={style['install-list']}>{viewInstallApps}</ul>
                </div>
                <div className={style.develop}>
                    <div>В разработке</div>
                    <ul className={style['develop-list']}>{viewDevelopApps}</ul>
                </div>
                <button
                    className={style['btn-setting']}
                    onClick={() => setOpenSettingApp(!openSettingApp)}>
                    Настройки отображения</button>
            </div>
        </>
    )
}

export default AppsSection;