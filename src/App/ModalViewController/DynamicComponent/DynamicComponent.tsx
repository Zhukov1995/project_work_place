import React, { lazy, Suspense } from 'react';
import Spinner from '../../simpleComponents/Spinner/Spinner';

interface IDynamicComponent {
    componentName: string,
    directory: 'DefaultApps' | 'InstallApps' | 'WidgetApps'
}

const DynamicComponent = React.memo(function ({ componentName, directory }: IDynamicComponent) {
    const Component = lazy(() => import(`../../Apps/${directory}/${componentName}/${componentName}`));
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense>
    );
});

export default DynamicComponent;