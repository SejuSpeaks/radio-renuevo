import React,{ useState } from "react";
import { Dimensions,SafeAreaView,View,StyleSheet } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import MusicPlayer from "./MusicPlayer";
import MiniPlayer from "./MiniPlayer";
import HomeBar from "./HomeBar";

const {height} = Dimensions.get('window');
// const {bottom} = useSafeAreaInsets();
const MINIMIZED_PLAYER_HEIGHT = 70;
const TABBAR_HEIGHT = 30 + 50;
const SNAP_TOP = 0;
const SNAP_BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT;
const config = {
    damping: 15,
    mass: 1,
    stiffness: 150,
    overshootClamping: false,
    restSpeedThreshold: 0.1,
    restDisplacementThreshold: 0.1
};

const BottomTab = () => {
    const [up, setUp] = useState(false);
    const translateY = up ? SNAP_TOP : SNAP_BOTTOM;
    const translateBottomTab = up ? TABBAR_HEIGHT : 0;

    return (
        <>
            <View style={[styles.MusicPlayerSheet, {transform:[{translateY}]}]}>
                <MusicPlayer onPress={()=> setUp(false)}/>
                <View
                style={{
                    opacity: up ? 0 : 1,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: MINIMIZED_PLAYER_HEIGHT
                }}
                >
                <MiniPlayer onPress={console.log('ohhh')} />
                </View>   
             </View>

            <View style={[{transform:[{translateY:translateBottomTab}]}]}>
                <HomeBar/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    MusicPlayerSheet: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor:"cyan"
    },
    container:{
        backgroundColor: "#272829",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: TABBAR_HEIGHT,
        flexDirection: "row",
        borderTopColor: "black",
        borderWidth: 1
    }
})

export default BottomTab;