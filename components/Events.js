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
      
      <View style={styles.flatlist}>

      <Text style={styles.heading}>Events</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    paddingLeft:'5%',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    width: width - 32,
  },
  image: {
    width: width - 32,
    height: 185,
    resizeMode: 'cover',
  },
  flatlist:{
    
  }
});

export default Events;
