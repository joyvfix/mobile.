import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {white} from '../utils';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-vector-icons/Icon';

const Crud = () => {
  const [kategori, setKategori] = useState([
    {
      nama: 'ayam',
    },
    {
      nama: 'sayur',
    },
    {
      nama: 'minuman',
    },
    {
      nama: 'salad',
    },
    {
      nama: 'gorengan',
    },
    {
      nama: 'rebus ',
    },
    {
      nama: 'telur',
    },
  ]);

  const [kategoriSeleksi, setKategoriSeleksi] = useState({
    nama: 'ayam',
  });

  const [dataTrending, setDataTrending] = useState([
    {namaResep: 'Ayam goreng madu'},
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#212121'}}>
          my<Text style={{color: '#4169e1'}}>recep</Text>
        </Text>
      </View>
      <View>
        <FlatList
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginLeft: 10}}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View
                style={{
                  marginRight: 5,
                  backgroundColor:
                    kategoriSeleksi.nama == item.nama ? '#4169e1' : '#FFFFFF',
                  elevation: 3,
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                  marginBottom: 10,
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <Text
                  style={{
                    color:
                      kategoriSeleksi.nama == item.nama ? '#fff' : '#212121',
                  }}>
                  {item.nama}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#212121'}}>
            Trending
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14}}>Lihat semua</Text>
          <Icon name="arrow-right" size={20} color="#bdbdbd" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Crud;
