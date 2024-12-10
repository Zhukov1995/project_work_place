import style from "./AppSectionItem.module.css";
import { IModal } from "../../../../../../../store/interfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAppWindowShow } from "../../../../../../../store/actions";

interface IAppSectionItem {
    app: IModal,
    openSettingApp: boolean
}

const AppSectionItem = ({ app, openSettingApp }: IAppSectionItem) => {
    const [checked, setChecked] = useState<boolean>(app.config.show_window)
    const dispatch = useDispatch();

    function handleCheck() {
        setChecked(!checked)
        dispatch(toggleAppWindowShow(app.id, !checked))
    }

    return (
        <li className={style['list-item']}>
            <img src={app.logo} alt={app.name} />
            <span>{app.name}</span>
            {openSettingApp && <input type="checkbox" onChange={() => handleCheck()} checked={checked} />}
        </li>
    )
}

export default AppSectionItem;