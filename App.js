import React from 'react';
import {View, Text} from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persist from './src/config/store';

const App = () => {
  const persistStore = persist();

  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <View style={{flex: 1}}>
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
