
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/login'
  
const Drawer = createDrawerNavigator();

export default function DrawerHome() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
       </Drawer.Navigator>
    </NavigationContainer>
  );
}
