import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');



const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Eventos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      padding: 10,
      backgroundColor: '#fff',
      flex: 1,
      borderWidth: 2,
      borderColor: '#000',
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    
    image: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
    },
  });

export default Events;