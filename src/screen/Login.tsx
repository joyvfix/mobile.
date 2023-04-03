// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const login = () => {
//   return (
//     <View style={Styles.container}>
//       <Text>login</Text>
//     </View>
//   );
// };

// export default login;

// const Styles = StyleSheet.create({
//   container: {
//     padding: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {black, white} from '../utils';
import Bottomlogreg from '../components/BottomLogReg';
import Componentinput from './Componentinput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';

// type Props = {
//   navigation: any;
// };
type loginscreennavigationprop = NativeStackScreenProps<
  RootStackParams,
  'Login'
>;
export default class Login extends Component<loginscreennavigationprop> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.maincontainer}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require('../assets/icon/applelogo.png')}
          />
          <Text style={styles.judul}>login</Text>
          <Text style={styles.Judul}>silahkan login agar bisa bergabung</Text>
          <Componentinput />

          {/* <Bottomlogreg title="sign in" /> */}
          <View style={styles.kotak}>
            <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
              <Text style={styles.sign}>sign in</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.bawah}>
              dont have account? <Text style={styles.text}>create account</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 30,
  },
  logocontainer: {
    //backgroundColor:silver,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  judul: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  Judul: {
    //color:
    marginTop: 15,
  },

  text: {
    color: 'blue',
    fontSize: 15,
  },
  bawah: {
    color: black,
    fontSize: 15,
    display: 'flex',
    marginTop: 20,
  },

  kotak: {
    //paddingTop: 5,
    // marginTop: 150,
    // backgroundColor: 'blue',
    // paddingStart: 70,
    // borderRadius: 15,
    // fontWeight: 'bold',
    paddingTop: '30%',
  },
  sign: {
    // paddingHorizontal: '35%',
    // borderRadius: 15,
    // marginTop: 10,
    // marginBottom: 10,

    // paddingLeft: 50,
    // color: white,
    // fontSize: 30,
    // fontWeight: '900',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: white,
    backgroundColor: 'blue',
    paddingHorizontal: '30%',
    paddingVertical: 15,
    borderRadius: 15,
    fontSize: 20,
  },
});

// import {
//   Text,
//   StyleSheet,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import React, {Component} from 'react';
// import {black, white} from '../utils';
// import Bottomlogreg from '../components/BottomLogReg';
// import Componentinput from './Componentinput';

// type Props = {
//   navigation: any;
// };
// export default class Login extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.maincontainer}>
//         <View style={styles.logocontainer}>
//           <Image
//             style={styles.logo}
//             source={require('../assets/icon/applelogo.png')}
//           />
//           <Text style={styles.judul}>login</Text>
//           <Text style={styles.Judul}>silahkan login agar bisa bergabung</Text>
//           <Componentinput />

//           {/* <Bottomlogreg title="sign in" /> */}
//           <View style={styles.kotak}>
//             <TouchableOpacity>
//               <Text
//                 onPress={() => this.props.navigation.navigate('Profile')}
//                 style={styles.sign}>
//                 sign in
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity>
//             <Text style={styles.bawah}>
//               dont have account? <Text style={styles.text}>create account</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   logo: {
//     width: 70,
//     height: 70,
//     marginTop: 30,
//   },
//   logocontainer: {
//     //backgroundColor:silver,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   judul: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   Judul: {
//     //color:
//     marginTop: 15,
//   },

//   text: {
//     color: 'blue',
//     fontSize: 15,
//   },
//   bawah: {
//     color: black,
//     fontSize: 15,
//     display: 'flex',
//     marginTop: 20,
//   },

//   kotak: {
//     //paddingTop: 5,
//     // marginTop: 150,
//     // backgroundColor: 'blue',
//     // paddingStart: 70,
//     // borderRadius: 15,
//     // fontWeight: 'bold',
//     paddingTop: '30%',
//   },
//   sign: {
//     // paddingHorizontal: '35%',
//     // borderRadius: 15,
//     // marginTop: 10,
//     // marginBottom: 10,

//     // paddingLeft: 50,
//     // color: white,
//     // fontSize: 30,
//     // fontWeight: '900',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     color: white,
//     backgroundColor: 'blue',
//     paddingHorizontal: '30%',
//     paddingVertical: 15,
//     borderRadius: 15,
//     fontSize: 20,
//   },
// });
