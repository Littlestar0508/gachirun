import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, PixelRatio} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const {wid, hei} = Dimensions.get('window');

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>로그인</Text>
        </View>
        <View style>
          <Text style={styles.logo}>가치RUN</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE3A43',
    height: responsiveHeight(4),
  },

  text: {
    color: '#FFF',
    fontSize: responsiveFontSize(3),
    fontWeight: '400',
  },

  logo: {
    marginTop: responsiveHeight(25),
    textAlign: 'center',
    fontSize: responsiveFontSize(10),
    color: '#EE3A43',
    fontFamily: 'Gugi-Regular',
  },
});

export default Header;
