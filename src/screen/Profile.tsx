// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Components from './components';

// const profile = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal style={styles.contentcontainer}>
//         <Components />
//         <Components />
//         <Components />
//         <Components />
//         <Components />
//         <Components />
//         <Components />
//         <Components />
//       </ScrollView>
//     </View>
//   );
// };

// export default profile;

// const styles = StyleSheet.create({
//   container: {},
//   contentcontainer: {
//     flexDirection: 'row',
//   },
// });

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Components from './components';

const Profile = () => {
  return (
    <View style={styles1.container}>
      <View style={styles3.iconup}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3820/3820224.png',
          }}
          style={styles3.logoleft}
        />

        <Text style={styles3.textup}>AHMED</Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3503/3503822.png',
          }}
          style={styles3.logoright}
        />
      </View>
      <View style={styles2.logoawal}>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/03/23/71/96/240_F_323719653_zKbxGXK6TSUsvYNoAieftwJGbLeC8Zlx.jpg',
          }}
          style={styles2.gambarlogo}
        />
        <Text style={styles2.text}>LANG FREDRINN</Text>
        <TouchableOpacity style={styles2.text3}>
          <Text style={styles2.text2}>Edit Profil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles4.firstlogo}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/9927/9927645.png',
          }}
          style={styles4.logotext}
        />
        <Text style={styles4.textside}>Bekasi-Jawa Barat</Text>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1875/1875043.png',
          }}
          style={styles4.logotext2}
        />
        <Text style={styles4.textside2}>im mobile app</Text>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2111/2111374.png',
          }}
          style={styles4.logotext3}
        />
        <Text style={styles4.textside3}>our github</Text>
      </View>

      <ScrollView horizontal style={styles1.contentContainer}>
        <Components
          gambar="https://t3.ftcdn.net/jpg/05/69/42/28/240_F_569422849_PmnCookEuy98KaZoHunUhM0dH7uQu4il.jpg"
          nama="everest"
          source={0}
        />
        <Components
          gambar="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
          nama="forest"
          source={0}
        />
        <Components
          gambar="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          nama="sabana"
          source={0}
        />
        <Components
          gambar="https://cdn-icons-png.flaticon.com/128/992/992651.png"
          nama="add"
          source={0}
        />
        <Components
          gambar="https://cdn-icons-png.flaticon.com/128/4202/4202843.png"
          nama="Profile5"
          source={0}
        />
      </ScrollView>

      <View style={stylesbo.border}>
        <View style={styles5.textdanangka}>
          <Text style={styles5.textfirst}>137</Text>
          <Text style={styles5.textfirst}>postingan</Text>
        </View>
        <View style={styles6.textdanangka2}>
          <Text style={styles6.textsecond}>137</Text>
          <Text style={styles6.textsecond}>mengikuti</Text>
        </View>
        <View style={styles7.textdanangka3}>
          <Text style={styles7.textthird}>1.579</Text>
          <Text style={styles7.textthird}>diikuti</Text>
        </View>
      </View>

      <View style={styles8.beforelast}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/8359/8359693.png',
          }}
          style={styles8.beforeicon}
        />

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/408/408809.png',
          }}
          style={styles8.beforeicon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5948/5948910.png',
          }}
          style={styles8.beforeicon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/4149/4149770.png',
          }}
          style={styles8.beforeicon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5949/5949150.png',
          }}
          style={styles8.beforeicon}
        />
      </View>
      <View style={styles9.lasttext}>
        <TouchableOpacity>
          <Text style={styles9.lasttext1}>Gunakan aplikasi ini</Text>
        </TouchableOpacity>
      </View>

      <View style={styles10.lastlogo}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5948/5948524.png',
            }}
            style={styles10.lastlogo1}
          />
        </TouchableOpacity>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5948/5948534.png',
          }}
          style={styles10.lastlogo1}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/875/875068.png',
          }}
          style={styles10.lastlogo1}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/860/860808.png',
          }}
          style={styles10.lastlogo1}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
          }}
          style={styles10.lastlogo1}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles1 = StyleSheet.create({
  container: {
    // backgroundColor: 'none',
    marginTop: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: -150,
    borderBottomWidth: 1,
    paddingBottom: 25,
  },
});

const styles2 = StyleSheet.create({
  logoawal: {
    marginBottom: 20,
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 50,
  },
  gambarlogo: {
    height: 80,
    width: 70,
    marginBottom: 200,
    borderRadius: 55,
    borderWidth: 55,
    // borderStyle: 'solid',
  },
  text: {
    fontWeight: '800',
    fontSize: 30,
    marginLeft: 20,
  },
  text2: {
    display: 'flex',
    fontSize: 20,
    marginTop: 50,
    marginStart: -220,
    paddingLeft: 65,
    marginLeft: -230,
    paddingTop: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

    borderRadius: 5,
    height: 40,
    width: 230,
    borderWidth: 2,
    color: 'black',
  },
  text3: {},
});

const styles3 = StyleSheet.create({
  iconup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingBottom: 13,
  },

  textup: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

  logoleft: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },

  logoright: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});

const styles4 = StyleSheet.create({
  firstlogo: {
    flexDirection: 'row',
    marginBottom: 50,
    paddingBottom: 70,
  },
  logotext: {
    width: 30,
    height: 30,
    paddingTop: 10,
    marginTop: -170,
    marginBottom: 50,
    paddingLeft: 10,
    marginLeft: 10,
  },
  textside: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: -170,
  },

  logotext2: {
    width: 30,
    height: 30,
    paddingTop: 10,
    marginTop: -130,
    marginLeft: -205,
    paddingLeft: 30,
    marginRight: -80,
  },
  textside2: {
    fontSize: 20,
    paddingLeft: 90,
    marginTop: -135,
    marginRight: 50,
  },
  logotext3: {
    width: 30,
    height: 30,
    paddingTop: 20,
    marginTop: -90,
    marginLeft: -215,
    paddingLeft: 30,
    marginRight: -80,
  },
  textside3: {
    fontSize: 20,
    paddingLeft: 90,
    marginTop: -95,
    marginRight: 50,
  },
});

const styles5 = StyleSheet.create({
  textdanangka: {
    // backgroundColor: 'none',
    marginTop: 15,
    alignItems: 'center',
  },
  textfirst: {
    paddingRight: 310,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

const styles6 = StyleSheet.create({
  textdanangka2: {
    // backgroundColor: 'none',
    marginTop: -40,
    alignItems: 'center',
  },
  textsecond: {
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
const styles7 = StyleSheet.create({
  textdanangka3: {
    // backgroundColor: 'none',
    marginTop: -60,
    alignItems: 'center',

    paddingTop: 20,
  },
  textthird: {
    fontWeight: 'bold',
    paddingLeft: 300,
    fontSize: 15,
  },
});

const stylesbo = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
});

const styles8 = StyleSheet.create({
  beforelast: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: -5,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  beforeicon: {
    height: 30,
    width: 30,
    marginLeft: 40,
    marginRight: 10,
  },
});
const styles9 = StyleSheet.create({
  lasttext: {
    // backgroundColor: 'none',
    marginTop: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 15,
  },
  lasttext1: {
    fontWeight: '900',
    fontSize: 20,
    color: 'blue',
  },
});
const styles10 = StyleSheet.create({
  lastlogo: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: -5,
    borderBottomWidth: 0.5,
    paddingBottom: 50,
    borderStartWidth: 1,
  },
  lastlogo1: {
    // backgroundColor: 'none',
    height: 30,
    width: 30,
    marginLeft: 40,
    marginRight: 10,
    marginTop: 40,
  },
});
