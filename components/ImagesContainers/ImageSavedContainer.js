import React from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';

const ImageSavedList = ({item, deleteMovie}) => {
  return (
    <View style={styles.imageContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.overView}>
        🍿 {item.overview ? item.overview : 'No overview available'}
      </Text>
      <Image
        source={{
          uri: item.imagelink,
        }}
        style={styles.image}
      />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#eb5b5b' : '#000',
            transform: pressed ? [{scale: 1.1}] : [{scale: 1}],
          },
          styles.pressable,
        ]}
        onPress={() => deleteMovie(item.id)}>
        <Text style={styles.pressableText}>Delete From List</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 350,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    borderRadius: 1,
    width: '100%',
    height: 'auto',
  },
  title: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  overView: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 5,
  },
  pressable: {
    width: '100%',
    padding: 6,
  },
  pressableText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default ImageSavedList;
