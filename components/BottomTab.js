import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import { Audio } from "expo-av";

import MusicPlayer from './MusicPlayer';
import MiniPlayer from './MiniPlayer';
import HomeBar from './HomeBar';

const { height } = Dimensions.get('window');
const MINIMIZED_PLAYER_HEIGHT = 70;
const TABBAR_HEIGHT = 30 + 50;
const SNAP_TOP = 0;
const SNAP_BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT;

const springConfig = {
    damping: 20,  
    stiffness: 150, 
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  };

const BottomTab = () => {
  const translationY = useSharedValue(SNAP_BOTTOM);
  const isMinimized = useSharedValue(1);
  const [playing, setPlaying] = useState(false);
  const [radio, setRadio] = useState();

  useEffect(() => {
    const setupRadio = async () => {

        // await Audio.setAudioModeAsync({
        //     staysActiveInBackground: true,
        //     playsInSilentModeIOS: true,
        // })

        const url = await fetchStreamUrl("https://us2.maindigitalstream.com:2199/tunein/renuevo.pls");
        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: url }
        );


        setRadio(newSound);
    };

    setupRadio();
}, []);


const changePlay = async () => {
    if (playing) {
        console.log('stopping sound');
        setPlaying(false);
        await radio.pauseAsync();
    } else {
        setPlaying(true);
        await radio.playAsync();
    }
};
  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translationY.value;
    },
    onActive: (event, ctx) => {
      translationY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (event.velocityY > 0) {
        translationY.value = withSpring(SNAP_BOTTOM,springConfig);
        isMinimized.value = 1
      } else {
        translationY.value = withSpring(SNAP_TOP,springConfig);
        isMinimized.value = 0
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    };
  });

  const minimizedStyle = useAnimatedStyle(()=>{
    return {
        opacity: isMinimized.value
    }
  })

  return (
    <>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.MusicPlayerSheet, animatedStyle]}>
          <MusicPlayer changePlay={changePlay} playing={playing} setPlaying={setPlaying} />
          <Animated.View
            style={[{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT,
            },
            minimizedStyle
        ]}
          >
            <MiniPlayer playing={playing} setPlaying={setPlaying} changePlay={changePlay} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>

      <View style={[{ transform: [{ translateY: 0 }] }]}>
        <HomeBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MusicPlayerSheet: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#272829',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: TABBAR_HEIGHT,
    flexDirection: 'row',
    borderTopColor: 'black',
    borderWidth: 1,
  },
});

const fetchStreamUrl = async (url) => {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const matches = text.match(/File1=(.+)/);
        return matches ? matches[1].trim() : null;
    } catch (error) {
        console.error('Error fetching url', error);
        return null;
    }
};


export default BottomTab;
