import { useRef, lazy, Suspense } from 'react';

import TaskBar from './components/TaskBar/TaskBar';
import BtnToggleTaskBar from './simpleComponents/BtnToggleTaksBar/BtnToggleTaskBar';
import LabelAppList from './components/LabelAppList/LabelAppList';
import TaskBarAllApps from './components/TaskBar/TaskBarAllApps/TaskBarAllApps';

import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import { LoadingFallback } from './utils/fallback';

const WidgetPanel = lazy(() => import('./Apps/WidgetApps/WidgetPanel/WidgetPanel'));
const ModalViewController = lazy(() => import('./ModalViewController/ModalViewController'));


function App(): JSX.Element {
  const parentRef = useRef(null);

  window.onbeforeunload = function(event) {
    const hasUnsavedChanges = true;
    if (hasUnsavedChanges) {
        const message = 'У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу?';
        event.returnValue = message; // Для совместимости с Chrome
        return message; // Для других браузеров
    }
  };

  return (
    <div className="App" ref={parentRef}>
      <Suspense fallback={<LoadingFallback />}>
        <WidgetPanel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ModalViewController parentRef={parentRef} />
      </Suspense>
      <LabelAppList />
      <BtnToggleTaskBar />
      <TaskBarAllApps />
      <TaskBar />
      {/* <AuthPage /> */}
    </div>
  );
}

export default App;
