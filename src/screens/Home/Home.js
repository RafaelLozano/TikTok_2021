import React from 'react'
import { View, Text ,SafeAreaView} from 'react-native'
import Post from '../../components/Post/Post'
import postFeed from'../../../assets/data/postFeed'

const Home = () => {
    const post1 = postFeed[0];
    
    return (
        <SafeAreaView>
            <Post post={post1}/>
        </SafeAreaView>
    )
}

export default Home
