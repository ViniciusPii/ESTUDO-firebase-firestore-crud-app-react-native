import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Edit from './edit';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: '#222',
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
