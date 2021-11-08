import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ac0c6',
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
});
