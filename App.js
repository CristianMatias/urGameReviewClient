import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/components/signin/signin';
import Login from './src/components/login/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

