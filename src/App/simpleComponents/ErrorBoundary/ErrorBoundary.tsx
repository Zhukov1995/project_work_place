import { Component, ErrorInfo } from "react";

import { Props, State } from "./interface";

import style from './ErrorBoundary.module.css';



class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };
    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }
    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }
    public render() {
        if (this.state.hasError) {
            return <div className={style.container}>
                <div className={style.alert}>
                    <h3>Произошла ошибка :( </h3>
                    <span>Попробуйте перезапустить приложение</span>
                </div>
            </div>;
        }
        return this.props.children
    }
}
export default ErrorBoundary;