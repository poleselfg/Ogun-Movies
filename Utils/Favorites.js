import store from 'react-native-simple-store';
import {alertSave, alertDeleteList, alertDeleteMovie} from './Toast';

const buildMovie = item => {
  return {
    title: item.title,
    overview: item.overview,
    imagelink: item.backdrop_path,
    id: new Date(),
  };
};

export const saveFavorites = item => {
  const movie = buildMovie(item);
  store.push('moviesarray', movie);
  alertSave(movie);
};

export const deleteFavorite = (id, movies) => {
  const moviesWithoutTheDeletedMovie = movies.filter(movie => movie.id !== id);
  store.save('moviesarray', moviesWithoutTheDeletedMovie);
  alertDeleteMovie();
  return moviesWithoutTheDeletedMovie;
};

export const deleteAllFavorites = () => {
  store.delete('moviesarray');
  alertDeleteList();
  return [];
};
