import React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import DashboardStack from './DashboardStack';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <DashboardStack />
    </NavigationContainer>
  );
}

export default Router;
