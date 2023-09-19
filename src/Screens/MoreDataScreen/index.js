import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

const ImgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MoreDataScreen = ({route, navigation}) => {
  const data = route.params.data;
  console.log('params----------', data);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: ImgBaseUrl + item.poster_path}}
          style={styles.poster}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Assets/icons/back.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={{marginTop: 20}}>
        <FlatList numColumns={3} data={data} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default MoreDataScreen;
