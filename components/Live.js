import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import HomeBar from './HomeBar';

const Live = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Live</Text>
      <View style={styles.spacer} />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    flex: 1,
  },
});

export default Live;
