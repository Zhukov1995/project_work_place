import { useState, memo } from "react";
import style from "./ImageWithPlaceholder.module.css";

interface IProps {
    setActiveImage: (value: number) => void
    setBackgroundApp: () => void
    activeImage: number | null
    src: string
    index: number
}

const ImageWithPlaceholder = ({ setActiveImage, src, index, activeImage, setBackgroundApp }: IProps) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    return (
        <div className={style['wrapper-img']}>
            <img
                onClick={() => setActiveImage(index)}
                onDoubleClick={() => setBackgroundApp()}
                onLoad={() => setLoaded(true)}
                src={src}
                alt="#"
                className={`${style.image} ${index === activeImage ? style.active : null}`} />
            {loaded ? null : <div className={style.placeholder}></div>}
        </div>
    )
}

export default memo(ImageWithPlaceholder);