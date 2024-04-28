import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

class Body extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="ID" />
        </View>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="PW" />
        </View>
        <View style={styles.containerLogin}>
          <TouchableOpacity>
            <Text style={styles.login}>로그인</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.etc}>
            <View style={styles.detail}>
          <Text style={styles.textEtc}>아이디 찾기</Text>
          <Text style={styles.textEtc2}>PW 찾기</Text>
          <Text style={styles.textEtc}>회원 가입</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(6),
  },

  textInput: {
    width: responsiveWidth(70),
    fontSize: responsiveFontSize(3),
    borderColor: '#EE3A43',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(0.6),
  },

  login: {
    fontSize: responsiveFontSize(3),
    fontWeight: '600',
    color: '#FFF',
    width: responsiveWidth(70),
    borderRadius:10,
    textAlign:'center',
    backgroundColor:'#EE3A43',
    paddingVertical: responsiveHeight(0.6),
  },

  containerLogin: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(6),
  },

  etc: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(6),
  },

  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(70),
  },

  textEtc: {
    color: '#EE3A43',
    fontSize: responsiveFontSize(2),
    paddingHorizontal: responsiveWidth(4),
  },

  textEtc2: {
    color: '#EE3A43',
    fontSize: responsiveFontSize(2),
    paddingHorizontal: responsiveWidth(4),
    borderRightColor: '#EE3A43',
    borderLeftColor : '#EE3A43',
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
  }
});

export default Body;
