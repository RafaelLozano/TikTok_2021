import React, { Component, useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Image} from 'react-native'
import { Video } from 'expo-av';
import styles from './styles'
import { Entypo } from '@expo/vector-icons'; 



const Post = () => {
    
    const [paused,setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused)
    }
    return (
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <View style={styles.mainContainer}>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    style={styles.video}
                    resizeMode="cover"
                    shouldPlay={paused}
                    isLooping
                />
                <View style={styles.bottomContainer}>
                    <View style={styles.sideBar}>
                        <View style={styles.profilePictureContainer}>
                            <Image
                                source={{ uri:'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'}}
                                style={styles.profilePicture}
                            />
                        </View>
                        
                        <View style={styles.iconContainer}>
                            <Entypo name="beamed-note" size={24} color="white" />
                            <Text style={styles.statsLabel}>123</Text>
                        </View>
                        
                        <View style={styles.iconContainer}>
                            <Entypo name="beamed-note" size={24} color="white" />
                            <Text style={styles.statsLabel}>123</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Entypo name="beamed-note" size={24} color="white" />
                            <Text style={styles.statsLabel}>123</Text>
                        </View>
                    </View>


                    <View style={styles.bottom}>
                        <Text style={styles.userName}>Name of creator</Text>
                        <Text style={styles.description}>description of the video, tikTok app</Text>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Entypo name="beamed-note" size={24} color="white" />
                            <Text style={styles.songName}> song name </Text>

                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Post
