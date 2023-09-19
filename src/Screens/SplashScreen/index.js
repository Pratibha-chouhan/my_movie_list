import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.linearGradient}>
      <Text style={styles.text}>My Movie App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 38,
    color: '#53B175',
    fontWeight: 'bold',
  },
});
export default SplashScreen;
