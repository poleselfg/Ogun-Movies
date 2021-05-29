import Toast from 'react-native-toast-message';

export const alertSave = item =>
  Toast.show({
    text1: item.title,
    text2: 'Saved to favorites list 👋',
    visibilityTime: 1000,
  });

export const alertDeleteList = () =>
  Toast.show({
    type: 'error',
    text1: 'List Deleted 🗑️',
    visibilityTime: 1000,
  });

export const alertDeleteMovie = () =>
  Toast.show({
    type: 'error',
    text1: 'Deleted from favorites list ',
    visibilityTime: 1000,
  });
