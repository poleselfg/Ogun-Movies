import {API_KEY} from '@env';

export const fetchMovies = async searchValue => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  const response = await fetch(url);
  const responseJson = await response.json();
  if (responseJson.results && Array.isArray(responseJson.results)) {
    return responseJson.results.map(item => ({
      ...item,
      backdrop_path: item.backdrop_path
        ? 'https://image.tmdb.org/t/p/original' + item.backdrop_path
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcFI6hTmgUtdxQTZktMt5KgEbySf4mtRgfQ&usqp=CAU',
    }));
  }

  return [];
};
