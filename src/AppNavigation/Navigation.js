import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import MoreDataScreen from '../Screens/MoreDataScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoreData" component={MoreDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
