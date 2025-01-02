import { motion, useDragControls } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { memo, useRef, useState } from 'react';

import { closeModal, setIdTargetModal, setZIndexTargetModal } from '../../store/actions';
import CloseIcon from '../../simpleComponents/CloseIcon/CloseIcon';
import FullscreenIcon from '../../simpleComponents/FullscreenIcon/FullscreenIcon';
import RollupIcon from '../../simpleComponents/RollupIcon/RollupIcon';
import { IModalPosition, IModalSize, ITargetModal } from './interface';

import style from './Modal.module.css';
import PositionController from './PositionController/PositionController';
import MoveIcon from '../../simpleComponents/MoveIcon/MoveIcon';



const Modal = ({ children, parentRef, app }: ITargetModal) => {
    const [modalSize, setModalSize] = useState<IModalSize>({
        width: 700,
        height: 500
    });
    const [modalPosition, setModalPosition] = useState<IModalPosition>({
        x: window.innerWidth / 2 - (modalSize.width / 2),
        y: window.innerHeight / 2 - (modalSize.height / 2)
    });
    const [isOpenModalConfig, setIsOpenModalConfig] = useState<boolean>(false);
    const [isDragStart, setIsDragStart] = useState<boolean>(false);

    const controls = useDragControls();
    const headRef = useRef(null);
    const modalRef = useRef(null);
    const dispatch = useDispatch();

    // контролируем область зажатия для перетаскивания
    function controlPointer(e: any) {
        if (headRef.current === e.target) {
            controls.start(e);
            console.log('Действие "Перемещение" опубликованно');
        }
    }
    // контролируем zindex модального окна и проверяем изменение размеров окна
    function setZIndex(e: any, id: number) {
        dispatch(setIdTargetModal(id));
        dispatch(setZIndexTargetModal(id));
        setCalcModalSize(e);
        console.log('Действие "Контроль z-индексов" опубликованно');
    }

    // отслеживаем изменение размеров блока
    function setCalcModalSize(e: any) {
        if (modalRef.current === e.target && !app.config.fullscreen) {
            const width = e.target.offsetWidth;
            const height = e.target.offsetHeight;
            setModalSize({ width, height });
            console.log('Действие "Изменение размеров модального окна" опубликованно');
        }
    }

    // записываем текущую позицию после окончания перемещения
    function dragEnd(e: any) {
        const position = e.target.getBoundingClientRect();
        const x = position.left;
        const y = position.top;
        setModalPosition({ x, y });
        setIsDragStart(false);
        console.log('Действие "Запись текущей позиции" опубликованно');
    }

    // перемещение при использовании контроллера
    function setModalConfig(modalSize: IModalSize, modalPosition: IModalPosition) {
        setModalSize(modalSize);
        setModalPosition(modalPosition);
        console.log('Действие "Перемещение с использованием контроллера" опубликованно');
    }

    // сворачивает приложение
    const isRollup = app.config.rollup ? 'none' : 'block';

    // контролирует ширину фуллскрина
    const isFullscreen = app.config.fullscreen ?
        { width: '100%', height: '100%' }
        :
        { width: `${modalSize.width}px`, height: `${modalSize.height}px` };

    const shortName = app.name.length > 30 ? app.name.slice(0, 30) + '...' : app.name;


    return (
        <motion.div
            ref={modalRef}
            animate={app.config.fullscreen ? "hidden" : "visible"}
            exit={{ scale: 0 }}
            variants={{
                hidden: { y: 0, x: 0, transition: { duration: 0 } },
                visible: { x: modalPosition.x, y: modalPosition.y, transition: { duration: 0 } }
            }}
            drag
            dragConstraints={parentRef}
            dragElastic={0}
            dragMomentum={false}
            dragControls={controls}
            onDragStart={(e) => setIsDragStart(true)}
            onDragEnd={(e) => dragEnd(e)}
            dragListener={false}
            whileTap={{ zIndex: 2 }}
            style={{ zIndex: app.config.zIndex, display: isRollup, ...isFullscreen }}
            onClick={(e) => setZIndex(e, app.id)}
            className={style.modal}>
            <div
                ref={headRef}
                onPointerDown={(e) => controlPointer(e)}
                className={style['modal-head']}>
                <p className={style['modal-head-title']} title={app.name}>{shortName}</p>
                <div
                    className={style['btn-group']}>
                    <MoveIcon
                        isOpenModalConfig={isOpenModalConfig}
                        setIsOpenModalConfig={setIsOpenModalConfig} />
                    <RollupIcon id={app.id} />
                    <FullscreenIcon id={app.id} />
                    <CloseIcon click={() => dispatch(closeModal(app.id))} />
                </div>
            </div>
            {children &&
                <div style={{
                    display: isDragStart? 'none' : 'block',
                    height: '100%'
                    }}>
                    {children}
                </div>
            }
            {isDragStart &&
                <div className={style.alert}>
                    <p>Перемещение окна...</p>
                </div>
            }
            {isOpenModalConfig && !app.config.fullscreen
                &&
                <PositionController
                    setIsOpenModalConfig={setIsOpenModalConfig}
                    setModalConfig={setModalConfig} />}
        </motion.div>
    )
}

export default memo(Modal);