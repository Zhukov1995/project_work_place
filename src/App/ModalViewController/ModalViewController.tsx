import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import ErrorBoundary from "../simpleComponents/ErrorBoundary/ErrorBoundary";
import Modal from "../components/Modal/Modal";
import { IinitialState, IModal } from "../store/interfaces";
import { IModalViewController } from "./interface";
import DynamicComponent from "./DynamicComponent/DynamicComponent";

import style from "./ModalViewController.module.css";

const ModalViewController = ({ parentRef }: IModalViewController) => {
    const modalList = useSelector<IinitialState, IModal[]>(state => state.modalList);

    const viewModals = modalList.map((app: IModal) => {
        return (
            <Modal parentRef={parentRef} key={app.id} app={app}>
                <ErrorBoundary>
                    {
                        app.component &&
                        app.default &&
                        <DynamicComponent componentName={app.component} directory={'DefaultApps'} />
                    }
                    {
                        app.component &&
                        !app.default &&
                        <DynamicComponent componentName={app.component} directory={'InstallApps'} />
                    }
                    {!app.component &&
                        <div className={style.alert}>
                            <p>Приложение еще в разработке 🛠</p>
                        </div>
                    }
                </ErrorBoundary>
            </Modal>
        )
    })
    return (
        <AnimatePresence>
            {viewModals}
        </AnimatePresence>

    )
}

export default ModalViewController;