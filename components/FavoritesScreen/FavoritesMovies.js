import {View, StyleSheet, FlatList, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import ImageSavedList from '../ImagesContainers/ImageSavedContainer';
import store from 'react-native-simple-store';
import {useFocusEffect} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {deleteAllFavorites, deleteFavorite} from '../../Utils/Favorites';

const FavouritesMovies = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = () =>
    store.get('moviesarray').then(movs => setMovies(movs || []));
  const deleteMovie = id => setMovies(deleteFavorite(id, movies));
  const deleteList = id => setMovies(deleteAllFavorites());

  useFocusEffect(
    React.useCallback(() => {
      getMovies();
    }, []),
  );

  return (
    <View style={styles.container}>
      {movies.length ? (
        <>
          <Pressable style={styles.pressable} onPress={deleteList}>
            <Text style={styles.pressableText}> ❌ Empty List</Text>
          </Pressable>
          <FlatList
            data={movies}
            numColumns={1}
            renderItem={({item}) => (
              <ImageSavedList
                item={item}
                key={item.id}
                deleteMovie={deleteMovie}
              />
            )}
          />
        </>
      ) : (
        <Text style={styles.noFavorites}>
          📢 Add Favorites from the Home Screen
        </Text>
      )}

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
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  pressable: {
    width: '100%',
    backgroundColor: '#eb5b5b',
    padding: 6,
    marginBottom: 16,
  },
  pressableText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  noFavorites: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default FavouritesMovies;
