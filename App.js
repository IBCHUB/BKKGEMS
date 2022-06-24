import React from 'react';
import {View, Text, LogBox} from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persist from './src/config/store';
import Main from './src/main';
import {RecoilRoot} from 'recoil';

const App = () => {
  const persistStore = persist();
  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <RecoilRoot>
          <View style={{flex: 1}}>
            <Main />
          </View>
        </RecoilRoot>
      </PersistGate>
    </Provider>
  );
};

export default App;
