import * as React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from "./pages/login";
import storeproduct from "./pages/storeproduct";

// import DrawerHome from './app/layout'
// const App = () => {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//         initialRouteName="storeproduct">

//         <Stack.Screen name="storeproduct" component={storeproduct} />
//         <Stack.Screen name="DrawerHome" component={DrawerHome} />
//       </Stack.Navigator>

//     </NavigationContainer>


//   )
// }

// export default App

//  import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
  

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Go to notifications"
      />
    </View>
  );
}

 
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTap() {
  return (
       <Tab.Navigator  >
        <Tab.Screen
        
        name="HomeScreen" component={HomeScreen}  
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#f00'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
      </Tab.Navigator>
    
   );
}



// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//         initialRouteName="MyTap">
      
//         <Stack.Screen name="MyTap" component={MyTap} />
//         <Stack.Screen name="Login" component={Login} />
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MyTap">
        <Drawer.Screen name="MyTap" component={MyTap} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen   name="Home" component={HomeScreen}  /> 
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}