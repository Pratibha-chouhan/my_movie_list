import {StyleSheet, Dimensions} from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: '#000000',
  },
  image: {
    padding: 20,
    height: HEIGHT * 0.3,
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  container: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  input: {
    fontSize: 16,
    color: '#000',
    width: WIDTH * 0.7,
  },
  icon: {
    tintColor: '#000',
  },
  label: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  poster: {
    height: HEIGHT * 0.22,
    width: WIDTH * 0.3,
    margin: 2,
    borderRadius: 10,
    marginVertical: HEIGHT * 0.02,
  },
  topPoster: {
    height: HEIGHT * 0.35,
    width: WIDTH * 0.5,
    margin: 2,
    borderRadius: 10,
    marginVertical: HEIGHT * 0.02,
  },

  subContainer: {
    marginBottom: HEIGHT * 0.35,
  },
  marginTop: {
    marginTop: 40,
  },
  row_space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HEIGHT * 0.04,
  },
  more: {
    fontSize: 16,
    color: '#53B175',
  },
});
