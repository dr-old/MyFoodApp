import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/router';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import FlashMessage from 'react-native-flash-message';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
      <FlashMessage
        position="top"
        duration={3000}
        floating={true}
        hideOnPress={true}
      />
    </>
  );
}

export default App;
