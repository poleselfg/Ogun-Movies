import React, {useState, useCallback} from 'react';
import {Image, StyleSheet, View, Text, Pressable} from 'react-native';
import {saveFavorites} from '../../Utils/Favorites';

const ImageList = ({item}) => {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length > 2);
  }, []);

  return (
    <View style={styles.imageContainer} key={item.id}>
      <Text style={styles.title}>
        {item.title} - ⭐ {item.vote_average}
      </Text>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 2}
        style={styles.overView}>
        🍿 {item.overview ? item.overview : 'No overview available'}
      </Text>
      {lengthMore ? (
        <Text onPress={toggleNumberOfLines} style={styles.readMore}>
          {textShown ? 'Read less...' : 'Read more...'}
        </Text>
      ) : null}
      <Image
        source={{
          uri: item.backdrop_path,
        }}
        style={styles.image}
      />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#FF7745' : 'whitesmoke',
            transform: pressed ? [{scale: 1.1}] : [{scale: 1}],
          },
          styles.pressable,
        ]}
        onPress={() => saveFavorites(item)}>
        <Text style={styles.pressableText}>💾 Save to favorites</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 350,
    marginBottom: 40,
  },
  image: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 2,
    width: '100%',
    height: 'auto',
  },
  readmore: {
    lineHeight: 21,
    marginTop: 3,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  overView: {
    color: '#FFF',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 2,
  },
  readMore: {
    color: '#FFA611',
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 2,
  },
  pressable: {
    width: '100%',
    padding: 6,
  },
  pressableText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default ImageList;
