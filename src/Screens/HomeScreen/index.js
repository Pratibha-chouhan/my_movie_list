import React, {useEffect, useState} from 'react';
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
import axios from 'axios';

const ImgBaseUrl = 'https://image.tmdb.org/t/p/w500';
const HomeScreen = ({navigation}) => {
  const [movieName, setMovieName] = useState('');
  const [searchedData, setSearchData] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [jsonDataRender, setJsonDataRender] = useState([]);

  const [popularMovieData, setPopularMovieData] = useState([]);
  const [loadePopularMovies, setLoadPopular] = useState([]);

  const [topMoviesData, setTopMoviesData] = useState([]);
  const [comingMoviesData, setComingMoviesData] = useState([]);
  const [loadComingSoon, setLoadComingSoon] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSearchMovie = text => {
    const data = jsonData.filter(item => {
      return item.original_title.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setSearchData(data);
  };

  useEffect(() => {
    getLatestRelease();
    getPopularMovies();
    getTopRatedMovies();
    getComingSoonMovies();
  }, []);

  const getLatestRelease = () => {
    setLoading(true);
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=faa7ed58ac2d63c3943dc5377d72a5ce',
      )
      .then(res => {
        setJsonData(res.data.results);
        setJsonDataRender(res.data.results.splice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.log('errr--', err);
      });
  };

  const getPopularMovies = () => {
    setLoading(true);
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=faa7ed58ac2d63c3943dc5377d72a5ce',
      )
      .then(res => {
        setPopularMovieData([...res.data.results]);
        setLoadPopular(res.data.results.splice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.log('errr--', err);
      });
  };

  const getTopRatedMovies = () => {
    setLoading(true);

    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=faa7ed58ac2d63c3943dc5377d72a5ce',
      )
      .then(res => {
        setTopMoviesData([...res.data.results]);
        setLoading(false);
      })
      .catch(err => {
        console.log('errr--', err);
      });
  };

  const getComingSoonMovies = () => {
    setLoading(true);

    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=faa7ed58ac2d63c3943dc5377d72a5ce',
      )
      .then(res => {
        setComingMoviesData([...res.data.results]);
        setLoadComingSoon(res.data.results.splice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.log('errr--', err);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: ImgBaseUrl + item.poster_path}}
          style={styles.poster}
        />
      </View>
    );
  };

  const renderPopularItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: ImgBaseUrl + item.poster_path}}
          style={styles.poster}
        />
      </View>
    );
  };

  const renderTopMoviesItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: ImgBaseUrl + item.poster_path}}
          style={styles.topPoster}
        />
      </View>
    );
  };

  const renderComingItem = ({item, index}) => {
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
    <View style={styles.mainConatiner}>
      <ImageBackground
        source={require('../../Assets/images/fastx.jpeg')}
        style={styles.image}>
        <Text style={styles.title}>Fast X</Text>
        <Text style={[styles.title, {fontSize: 12, color: 'gray'}]}>
          Over many missions and against impossible odds, Dom Toretto (Vin
          Diesel) and his family...
        </Text>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.textBox}>
            <TextInput
              placeholder="Search Movie"
              value={movieName}
              onChangeText={tx => {
                handleSearchMovie(tx);
                setMovieName(tx);
              }}
              style={styles.input}
            />
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../Assets/icons/Search.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.subContainer}>
          {searchedData.length === 0 ? null : (
            <View>
              <FlatList
                numColumns={3}
                data={searchedData}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <View>
                      <Image
                        source={{uri: ImgBaseUrl + item.poster_path}}
                        style={styles.poster}
                      />
                    </View>
                  );
                }}
              />
            </View>
          )}

          <View>
            <View style={styles.row_space}>
              <Text style={styles.label}>Latest Releases</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MoreData', {data: jsonData})
                }>
                <Text style={styles.more}>Load More</Text>
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.marginTop}
              />
            ) : (
              <FlatList
                numColumns={3}
                data={jsonDataRender}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />
            )}
          </View>

          <View>
            <View style={styles.row_space}>
              <Text style={styles.label}>Popular Movies</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MoreData', {data: popularMovieData})
                }>
                <Text style={styles.more}>Load More</Text>
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.marginTop}
              />
            ) : (
              <FlatList
                numColumns={3}
                data={loadePopularMovies}
                keyExtractor={item => item.id}
                renderItem={renderPopularItem}
              />
            )}
          </View>
          <View>
            <View style={styles.row_space}>
              <Text style={styles.label}>Top Rated Movies</Text>
            </View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.marginTop}
              />
            ) : (
              <FlatList
                horizontal
                data={topMoviesData}
                keyExtractor={item => item.id}
                renderItem={renderTopMoviesItem}
              />
            )}
          </View>
          <View>
            <View style={styles.row_space}>
              <Text style={styles.label}>Coming Soon</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MoreData', {data: comingMoviesData})
                }>
                <Text style={styles.more}>Load More</Text>
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                style={styles.marginTop}
              />
            ) : (
              <FlatList
                numColumns={3}
                data={loadComingSoon}
                keyExtractor={item => item.id}
                renderItem={renderComingItem}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
