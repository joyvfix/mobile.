import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screen/Profile';
import screen1 from '../screen/screen1';
import Drawer from '../screen/Drawer';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Drawer} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({});
