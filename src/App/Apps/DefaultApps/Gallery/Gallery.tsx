import { useCallback, useMemo, useState } from "react";
import { storageStyle } from "../../../utils/storageStyles";
import style from "./Gallery.module.css";
import ImageWithPlaceholder from "./ImageWithPlaceholder/ImageWithPlaceholder";

const Gallery = () => {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    // устанавливаем фон рабочего стола
    const setBackgroundApp = useCallback(() => {
        if (activeImage !== null) {
            storageStyle.setStorageItemStyleValue('background_app', `url(${images[activeImage]})`);
            storageStyle.syncStorageStyle();
        }
    }, [activeImage]);

    const setImages = useCallback((value: number) => {
        setActiveImage(value);
    }, [])

    const viewImages = images.map((item, index) => {
        return <ImageWithPlaceholder
            setActiveImage={setImages}
            setBackgroundApp={setBackgroundApp}
            activeImage={activeImage}
            src={item}
            index={index}
            key={index}
        />
    });

    return (
        <>
            <div className={style.wrapper}>
                {viewImages}
            </div>
            <button
                onClick={() => setBackgroundApp()}
                className={style['btn-apply']}>
                Применить фон
            </button>
        </>
    )
}

export default Gallery;


var images = [
    "https://i.pinimg.com/originals/4c/b6/bc/4cb6bcbb863017f2f702e5fe07becaf1.jpg",
    "https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg",
    "https://static-cse.canva.com/blob/759807/vk1776.png",
    "https://news.microsoft.com/wp-content/uploads/prod/sites/46/2021/10/Windows-11-Bloom-Screensaver-Dark-1600x900-1.jpg",
    "https://lh3.googleusercontent.com/pw/AP1GczO9ATJA1atHU61H5bQcefooODtSyBsllLO1tOzAO71ozb1q3zvmih2llJz7y6C2svZ6cVCHTtrj0l5KeSYrh2SewHEHaljno-QB6jFxlTM_Wj1lREjkqfRQKquO2l1r1IpyhefMWDOeBpDrHAFv8N6d=w1645-h925-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczO_veAH8PzXvp3izkQqgLnyVAl2tlOqaG3WKbN0vnQHXVLOYrICevWVxTfdqeaw3oiiYuc0qunyq693dbsQT6Nv4Ns3w4z8vdQg1HojsqeeLKgu8AjnG7lL9hsHxlqQMxi5ssT06gvJJ3ciMFg2eQYB=w1645-h925-s-no-gm?authuser=0",
    "https://wallpaperswide.com/download/earth_8-wallpaper-1280x768.jpg",
    "https://ogotop.com/uploads/posts/2015-02/1425028414_29.jpg",
    "https://sotni.ru/wp-content/uploads/2023/08/eustoma-9-1.webp",
    "https://static-cse.canva.com/blob/848004/vk864.png",
    "https://kartinki.pics/pics/uploads/posts/2022-08/1659671566_1-kartinkin-net-p-zastavka-na-rabochii-stol-svetlaya-krasivo-1.jpg",
    "https://kartinki.pics/uploads/posts/2021-03/1616047369_17-p-luchshie-foni-dlya-rabochego-stola-21.jpg",
    "https://i.artfile.ru/2500x1563_802529_[www.ArtFile.ru].jpg",
    "https://img.desktopwallpapers.ru/3d/pics/wide/1920x1200/a7ef0b191a7998b45286dd2b203d401e.jpg",
    "https://png.pngtree.com/background/20230422/original/pngtree-lotus-blooming-beautiful-wallpapers-on-desktop-picture-image_2452151.jpg",
    "https://avatars.dzeninfra.ru/get-zen_doc/1101166/pub_5b7803a241e72700aaaf07e2_5b7803d5c8693100a9cdd62f/scale_1200",
    "https://99px.ru/sstorage/53/2020/07/tmb_313339_335997.jpg",
    "https://celes.club/uploads/posts/2022-05/1652822216_16-celes-club-p-fon-na-rabochii-stol-kompyutera-krasivie-17.jpg",
    "https://kartinki.pics/uploads/posts/2021-07/1625623584_12-kartinkin-com-p-fon-dlya-rabochego-stola-relaks-krasivie-f-12.jpg",
    "https://lh3.googleusercontent.com/proxy/gb3PfroL_VYgERchZ0LSDyeifGLaNzQaxXoQeCk6sjSM9Bg5A_Pc09s4NJcCh2fZjToTkA7VLtNy9wgE6nL2UiRLbM9rFVgTo_syzUxSRUlQAivSuVtSLRXSChNUCcZ-",
    "https://celes.club/uploads/posts/2022-05/1652822247_50-celes-club-p-fon-na-rabochii-stol-kompyutera-krasivie-53.jpg",
    "https://kartinki.pics/uploads/posts/2022-12/thumbs/1670048883_47-kartinkin-net-p-fonovaya-zastavka-na-rabochii-stol-krasivo-48.jpg"
];