import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ac0c6',
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    textAlign: 'right',
    marginTop: 10,
    fontStyle: 'italic',
    opacity: 0.4,
    textTransform: 'uppercase',
  },
  desc: {
    marginVertical: 10,
    marginHorizontal: 15,
    fontSize: 16,
    textAlign: 'justify',
  },
  price: {
    marginTop: 15,
    fontStyle: 'italic',
    fontSize: 18,
    opacity: 0.7,
    alignSelf: 'center',
  },
});
