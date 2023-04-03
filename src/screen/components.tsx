// import {StyleSheet, Text, View, Image} from 'react-native';
// import React from 'react';

// // interface props={}

// const components = () => {
//   return (
//     <View style={{padding: 12}}>
//       <Image
//         style={styles.img}
//         source={{
//           uri: 'https://cdn-icons-png.flaticon.com/512/13/13973.png',
//         }}
//       />
//       <Text style={styles.text}>gambar icon</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/3720/3720611.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon png</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/6302/6302096.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon photo</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670051.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon photo</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/542/542638.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon photo</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670147.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon photo</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/3046/3046120.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon photo</Text>

//       <View style={{padding: 12}}>
//         <Image
//           style={styles.img}
//           source={{
//             uri: 'https://cdn-icons-png.flaticon.com/128/1997/1997928.png',
//           }}
//         />
//       </View>
//       <Text style={styles.png}>icon photo</Text>
//     </View>
//   );
// };

// export default components;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   img: {
//     width: 100,
//     height: 100,
//     padding: 30,
//   },

//   text: {
//     fontSize: 20,
//     fontWeight: '300',
//     color: 'black',
//   },

//   png: {
//     fontSize: 20,
//     fontWeight: '300',
//     color: 'black',
//   },
// });

import {StyleSheet, Text, View, Image, ImageProps} from 'react-native';
import React from 'react';

interface Props extends ImageProps {
  nama: string;
  gambar: string;
}

const ComponentProfile: React.FC<Props> = ({nama, gambar}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: gambar,
        }}
      />
      <Text style={styles.txt}>{nama}</Text>
    </View>
  );
};

export default ComponentProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'black',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 100,
  },

  logo: {},

  logomanage: {},

  undername: {},
});
