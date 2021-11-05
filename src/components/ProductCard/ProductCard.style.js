import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#facd60',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  category: {
    fontSize: 12,
    marginLeft: 10,
    fontStyle: 'italic',
    opacity: 0.7,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  img: {
    minWidth: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
  },
  innerContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: '#e74645',
    fontSize: 16,
  },
  price: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
    opacity: 0.6,
  },
});
