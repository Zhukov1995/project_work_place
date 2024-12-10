import { useRef, lazy, Suspense } from 'react';

import TaskBar from './components/TaskBar/TaskBar';
import BtnToggleTaskBar from './simpleComponents/BtnToggleTaksBar/BtnToggleTaskBar';
import LabelAppList from './components/LabelAppList/LabelAppList';
import TaskBarAllApps from './components/TaskBar/TaskBarAllApps/TaskBarAllApps';

import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';

const Calendar = lazy(() => import('./Apps/WidgetApps/Calendar/Calendar'));
const PomodoroTimer = lazy(() => import('./Apps/WidgetApps/PomodoroTimer/PomodoroTimer'));
const ModalViewController = lazy(() => import('./ModalViewController/ModalViewController'));


function App(): JSX.Element {
  const parentRef = useRef(null);

  return (
    <div className="App" ref={parentRef}>

      <Suspense fallback={<Loading />}>
        <Calendar />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <PomodoroTimer />
      </Suspense>
      <Suspense fallback={<Loading />}>
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


const Loading = () => {
  return null
}
