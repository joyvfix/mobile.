// import {View, Text} from 'react-native';
// import React from 'react';
// import Bottomlogreg from '../components/BottomLogReg';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Splash = () => {
//   return (
//     <View>
//       <Icon name="acces-point" size={30} color={'black'}/>
//       <Text>Splash</Text>
//       <Bottomlogreg title="tombol" />
//     </View>
//   );
// };

// export default Splash;

import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Fumi} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import {blue, grey, white} from '../utils';

const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column-reverse',
        backgroundColor: white,
      }}>
      <Text
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 20,
          borderRadius: 1,
          
          backgroundColor: grey,
          borderStartWidth: 20,
          borderEndWidth: 20,
          color: white,
        }}
        onPress={() => navigation./*replace*/ navigate('Login')}>
        click for change page
      </Text>

      <View>
        <Image
          style={{width: 90, height: 90}}
          source={{
            uri: 'https://t3.ftcdn.net/jpg/00/55/47/68/240_F_55476867_QCp15mAPorn0w5oF4VSkUZJkCNvJhcax.jpg',
          }}
        />
      </View>
      {/* <Fumi
        label={'Email'}
        iconClass={Icon}
        iconName={'envelope'}
        iconColor={'#f95a25'}
        iconSize={20}
        inputPadding={16}
      />
      <Fumi
        label={'password'}
        iconClass={Icon}
        iconName={'unlock-alt'}
        iconColor={'#f95a25'}
        iconSize={20}
        inputPadding={16}
      /> */}
      {/* <View
        style={{
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity>
          <Icon name="home" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus-square" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={30} color={'black'} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
