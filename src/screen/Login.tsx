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

interface state {
  mata: boolean;
}

interface props {}

export default class Login extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      mata: true,
    };
  }
  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logo}
            source={require('../assets/icon/applelogo.png')}
          />
          <Text style={styles.judul}>login</Text>
          <Text style={styles.Judul}>silahkan login agar bisa bergabung</Text>
          <TextInput placeholder="Email" style={styles.input}></TextInput>
          <View style={styles.conterinputpass}>
            <TextInput
              placeholder="password"
              secureTextEntry={this.state.mata}
              style={styles.password}
            />

            <TouchableOpacity
              onPress={() => this.setState({mata: !this.state.mata})}>
              <Image
                source={require('../assets/icon/mata.png')}
                style={styles.mata}
              />
            </TouchableOpacity>
          </View>

          <Bottomlogreg title="sign in" />

          <Text style={styles.bawah}>
            dont have account? <Text style={styles.text}>have account</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: white,
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
  input: {
    borderBottomWidth: 1,
    width: '75%',
    marginTop: 50,
  },
  password: {
    borderBottomWidth: 1,

    width: '75%',
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

  conterinputpass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  mata: {
    height: 30,
    width: 30,
    paddingLeft: 30,
    marginLeft: -40,
    marginRight: -40,
    paddingleft: 10,
  },
});
