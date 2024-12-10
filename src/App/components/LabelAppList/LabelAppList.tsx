import { useRef } from "react";
import { useSelector } from "react-redux";

import { IinitialState, IModal } from "../../store/interfaces";

import style from "./LabelAppList.module.css";
import LabelAppListItem from "./LabelAppListItem/LabelAppListItem";



const LabelAppList = () => {
    const parentRef = useRef(null);
    const labelsApp = useSelector<IinitialState, IModal[]>(state => state.appList);

    const viewLabelsApp = labelsApp.filter(app => app.config.show_window).map(app => {
        return <LabelAppListItem app={app} parentRef={parentRef} key={app.id} />
    })

    return (
        <div className={style["label-list"]} ref={parentRef}>
            {viewLabelsApp}
        </div>
    )
}

export default LabelAppList;