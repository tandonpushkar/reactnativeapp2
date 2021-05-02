
import React, { useEffect } from 'react';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import { store } from '../redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'


const persistedStore = persistStore(store)

const App = () => {

  //GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

  // LogBox.ignoreLogs(['Setting a timer']);
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Navigator />
      </PersistGate>

    </Provider>
  );
};

export default App;
