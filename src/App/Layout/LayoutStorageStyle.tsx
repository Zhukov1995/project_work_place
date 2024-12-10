import { useEffect } from "react";
import { storageStyle } from "../utils/storageStyles";


interface ILayoutStorageStyle {
    children: React.ReactElement
}

const LayoutStorageStyle = ({ children }: ILayoutStorageStyle) => {

    useEffect(() => {
        storageStyle.createStorageStyle();
        storageStyle.syncStorageStyle();
    }, [])

    return children
}

export default LayoutStorageStyle;