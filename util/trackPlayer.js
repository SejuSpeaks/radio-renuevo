import TrackPlayer, {Event, Capability} from 'react-native-track-player';

export const setupPlayer = async () => {

  try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
          stopWithApp: false,
          capabilities: [
              Capability.Play,
              Capability.Pause,
              Capability.Stop,
      ],
      compactCapabilities: [
          Capability.Play,
          Capability.Pause,
        ],
    });
  } catch (e) {
    console.error('Error setting up track player', e);
  }
};

export const addTrack = async () => {
  try {
    await TrackPlayer.add({
      id: 'live-stream',  // Unique ID for the track
      url: 'https://us2.maindigitalstream.com/ssl/7425', // Your stream URL
      title: 'Live',
      artist: 'Radio Renuevo',
      artwork: require('../assets/radioGradient.png'),  // Use require() for local assets
    });
   
  } catch (e) {
    console.error('Error adding track', e);
  }
};


export const setupEventListeners = (setPlaying) => {
    
        const playListener = TrackPlayer.addEventListener(Event.RemotePlay, async () => {
          await TrackPlayer.play();
          setPlaying(true)
        });
      
        const pasueListener = TrackPlayer.addEventListener(Event.RemotePause, async () => {
          await TrackPlayer.pause();
          setPlaying(false)
        });
    

    return ()=> {
        playListener.remove();
        pasueListener.remove();
    }
  };
