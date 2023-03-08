import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {white} from '../utils';

interface Props {
  title: string;
}

export default class Bottomlogreg extends Component<Props> {
  render() {
    const {title} = this.props;
    return (
      <TouchableOpacity style={styles.kotak}>
        <Text style={styles.sign}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  kotak: {
    //paddingTop: 5,
    marginTop: 150,
    backgroundColor: 'blue',
    paddingStart: 70,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  sign: {
    paddingHorizontal: '35%',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,

    paddingLeft: 50,
    color: white,
    fontSize: 30,
    fontWeight: '900',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
