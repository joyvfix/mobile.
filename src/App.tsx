// import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
// import React, {Component} from 'react';
// import Splash from './screen/Splash';
// import Login from './screen/Login';
// import Drawer from './screen/Drawer';
// import Loginig from './screen/Loginig';
// import Crud from './screen/Crud';

// export default class App extends Component {
//   render() {
//     return <Loginig />;
//   }
// }

import {View, Text} from 'react-native';
import React from 'react';
import Router from './router';

const App = () => {
  return <Router />;
};

export default App;

// // In App.js in a new project

// // import React, {Component} from 'react';
// import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
// // import RootNavigator from './assets/navigation/RootNavigator';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './screen/Login';
// import Profile from './screen/Profile';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           options={{headerShown: false}}
//           name="Login"
//           component={Login}
//         />
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// const Styles = StyleSheet.create({});
