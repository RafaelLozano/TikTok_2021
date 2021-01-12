import React, { Component, useState } from 'react'
import { View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native'
import { Video } from 'expo-av';
import styles from './styles'
import { Entypo, FontAwesome, AntDesign,Fontisto} from '@expo/vector-icons'; 




const Post = (props) => {
    
  
    const [paused,setPaused] = useState(false);
    const [post,setPost] = useState(props.post);
    const [isLiked,setIsLiked] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused)
    }

    const onLikePress = () =>{
        //Solo se quiere afectar likes, se hace una copia del objeto
        const likesToAdd = isLiked ? -1 : +1;
        isLiked ? setIsLiked(false) : setIsLiked(true);
        
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        })
        
    }
    return (
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
            <View style={styles.mainContainer}>
                <Video
                    source={{ uri: post.video }}
                    style={styles.video}
                    resizeMode="cover"
                    shouldPlay={paused}
                    isLooping
                />
                <View style={styles.bottomContainer}>
                    <View style={styles.sideBar}>
                        <View style={styles.profilePictureContainer}>
                            <Image
                                source={{ uri: post.user.profilePicture}}
                                style={styles.profilePicture}
                            />
                        </View>
                        
                        <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                            <AntDesign name="heart" size={32} color={isLiked ? 'red' : 'white'}/>
                            <Text style={styles.statsLabel}>{post.likes}</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.iconContainer}>
                            <FontAwesome name="commenting" size={32} color="white" />
                            <Text style={styles.statsLabel}>{post.comments}</Text>
                        </View>

                        <View style={styles.iconContainer}>
                            <Fontisto name="share-a" size={32} color="white" />
                            <Text style={styles.statsLabel}>{post.shares}</Text>
                        </View>
                    </View>


                    <View style={styles.bottom}>
                        <View>
                            <Text style={styles.userName}>@{post.user.userName}</Text>
                            <Text style={styles.description}>{post.description}</Text>

                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Entypo name="beamed-note" size={24} color="white" />
                                <Text style={styles.songName}> {post.song} </Text>
                            </View>
                        </View>

                        <Image
                            source={{ uri: post.songImage}}
                            style={styles.songPicture}
                        />
                    </View>

                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Post
