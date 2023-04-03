import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Componentinput from './Componentinput';
import {black, blue, white} from '../utils';

export default class Loginig extends Component {
  render() {
    return (
      <View style={styles.mainstyle}>
        <View style={styles.logocontent}>
          <Image
            style={styles.logoig}
            source={require('../assets/icon/logoig.png')}
          />
        </View>
        {/* <Text style={styles.login}>𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text> */}
        {/* <Text style={styles.textlogin}>
            silahkan login agar bisa bergabung
          </Text> */}

        <View style={styles.inputpass}>
          <TextInput
            placeholder="Phone number,username or email"
            style={styles.email}></TextInput>
          <TextInput placeholder="password" style={styles.password}></TextInput>

          {/* <Image
            source={require('../assets/icon/mata.png')}
            style={styles.eye}
          /> */}
        </View>

        <View style={styles.cube}>
          <Text style={styles.textopti}>forgot password ?</Text>

          <Text style={styles.textakun1}>dont have account?</Text>
          <TouchableOpacity>
            <Text style={styles.textakun2}>sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signin}>login in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logocontent}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670124.png',
            }}
            style={styles.logofb}
          />
          <TouchableOpacity>
            <Text style={styles.textfb}>login with facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.styletextor}>
          <Text style={styles.textor}>OR</Text>
        </View>

        <View>
          <Image
            source={{
              uri: 'https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/facebook-logo-official.png?resize=1100%2C750&ssl=1',
            }}
            style={styles.logofromfb}
          />

          <Text style={styles.textfromfb}>from</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainstyle: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    paddingTop: 70,
    paddingLeft: 5,
  },
  logocontent: {
    flexDirection: 'row',
  },
  logoig: {
    width: 130,
    height: 130,
  },
  logofb: {
    width: 25,
    height: 25,
    top: 120,
    right: 13,
  },
  // login: {},
  // textlogin: {},
  cube: {},
  textfb: {
    top: 120,
    right: 15,
    marginLeft: 7,
    fontWeight: 'bold',
    color: blue,
  },
  textopti: {
    top: 90,
    paddingLeft: 250,
    fontWeight: 'bold',
    color: blue,
  },
  styletextor: {},
  textor: {
    top: 130,
    fontSize: 17,
    right: 10,
    // borderBottomWidth: 1,
  },
  textakun1: {
    left: 100,
    top: 280,
  },
  textakun2: {
    marginLeft: 225,
    color: blue,
    top: 259,
    fontWeight: 'bold',
    fontSize: 15,
  },
  signin: {
    top: 90,
    borderColor: blue,
    backgroundColor: blue,
    color: white,
    height: 45,
    width: 370,
    paddingLeft: 155,
    paddingTop: 13,
    marginRight: 15,
    borderRadius: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 15,
  },
  eye: {
    height: 20,
    width: 20,
  },
  email: {
    right: 10,
    top: 45,
    borderRadius: 2,
    borderColor: black,
    borderWidth: 0.5,
    width: 370,
    paddingLeft: 20,
  },
  inputpass: {
    borderColor: black,
    color: blue,
  },
  password: {
    right: 10,
    top: 70,
    borderRadius: 2,
    borderColor: black,
    borderWidth: 0.5,
    width: 370,
    paddingLeft: 20,
  },
  textfromfb: {
    top: 175,
    left: 39,
  },
  logofromfb: {
    top: 250,
    height: 80,
    width: 130,
    left: -5,
  },
});
