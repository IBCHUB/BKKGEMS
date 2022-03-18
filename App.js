import React from 'react';
import {View, Text, LogBox} from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persist from './src/config/store';
import Main from './src/main';

const App = () => {
  const persistStore = persist();
  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <View style={{flex: 1}}>
          <Main />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
