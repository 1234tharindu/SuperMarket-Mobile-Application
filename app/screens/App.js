/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
import DetailsScreen from './DetailsScreen';
import category from './category'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen}
         options={{
             headerShown:false,
         }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false,
        }}

        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          headerShown:false,
        }}

        />
         <Stack.Screen name="categories" component={category} options={{
          headerShown:false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;