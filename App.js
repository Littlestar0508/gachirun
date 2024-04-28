import React from 'react';
import {Node} from 'react';
import Header from '../GACHIRUN/Components/Header';
import Body from '../GACHIRUN/Components/Body'
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
