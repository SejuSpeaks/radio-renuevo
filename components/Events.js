import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Item = ({ item }) => {
   
  return (
    <View style={[styles.itemContainer, {width}]}>
      <Image source={ item.uri} style={[styles.image, {width, resizeMode:'contain'}]} />
    </View>
  );
};

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { uri: require("../assets/events/Image.png") },
    { uri: require("../assets/radioLogo.png") },
    { uri: require("../assets/radioLogo.png") },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Eventos</Text>
      <FlatList 
        data={data} 
        horizontal 
        pagingEnabled
        showsHorizontalScrollIndicator 
        bounces={false}
        renderItem={({ item }) => <Item item={item} />} 
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    padding:10,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  image: {
    width: width - 32,
    height: 200,
    resizeMode: 'cover',
  },
});

export default Events;
