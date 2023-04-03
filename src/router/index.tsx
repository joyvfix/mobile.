import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login} from '../screen';
import BottomTabs from '../bottomTabs/BottomTab';

export type RootStackParams = {
  splash: undefined;
  Login: undefined;
  BottomTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator /*screenOptions={{headerShown: true}}*/>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
