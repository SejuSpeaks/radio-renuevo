import { View,SafeAreaView,Text,Image } from "react-native";

const ArtistProfile = ({route}) => {
    const artist = route.params;

    return (
        <SafeAreaView>
            <Image source={artist.profile_image}/>
            <Text>{artist.name}</Text>
        </SafeAreaView>
    )
}

export default ArtistProfile;