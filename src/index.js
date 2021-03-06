import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
