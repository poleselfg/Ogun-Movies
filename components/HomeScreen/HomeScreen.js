import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import ImageList from '../ImagesContainers/ImageContainer';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {fetchMovies} from '../../Utils/MovieDB';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Avengers');

  // eslint-disable-next-line no-shadow
  const getMovieRequest = async searchValue => {
    const result = await fetchMovies(searchValue);
    setMovies(result);
  };

  useFocusEffect(
    React.useCallback(() => {
      getMovieRequest(searchValue);
    }, [searchValue]),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchValue}
        placeholder="Search Movies"
      />

      <View>
        <FlatList
          data={movies}
          numColumns={1}
          renderItem={({item}) => <ImageList item={item} />}
        />
      </View>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#291464',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 14,
    backgroundColor: '#FFF',
    borderRadius: 6,
    marginBottom: 20,
    color: '#FF2D98',
  },
});

export default HomeScreen;
