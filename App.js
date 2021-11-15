import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/components/signin/signin';
import Login from './src/components/login/login';
import Home from './src/components/home/home';
import Information from './src/components/information/information';
import GameProfile from './src/components/profile/gameProfile/gameProfile';
import UserProfile from './src/components/profile/userProfile/userProfile';
import VisitorProfile from './src/components/profile/visitorProfile/visitorProfile';
import Review from './src/components/review/review';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Iniciar Sesión" 
          component={Login} 
        />
        <Stack.Screen
          name="Registrarse"
          component={SignIn}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen
          name="Information"
          component={Information}
        />
        <Stack.Screen
          name="GameProfile"
          component={GameProfile}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen
          name="VisitorProfile"
          component={VisitorProfile}
        />
        <Stack.Screen
          name="Review"
          component={Review}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

