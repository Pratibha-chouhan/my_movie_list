import {StyleSheet, Dimensions} from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: '#fff',
  },
  poster: {
    height: HEIGHT * 0.22,
    width: WIDTH * 0.3,
    margin: 2,
    borderRadius: 10,
    marginVertical: HEIGHT * 0.02,
  },
});
