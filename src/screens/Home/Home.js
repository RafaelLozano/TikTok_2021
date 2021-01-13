import React, {useEffect, useState} from 'react'
import { View, Text ,SafeAreaView, FlatList,Dimensions} from 'react-native'
import Post from '../../components/Post/Post'
import postFeed from'../../../assets/data/postFeed'


import { listPosts } from'../../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

const Home = () => {
    const [data,setData] = useState([]);
    const height = Dimensions.get('window').height;

    useEffect(() => {
        const fecthPost = async() =>{
            //fetch all the post
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                console.log(response.data.listPosts.items);
                setData(response.data.listPosts.items);
                console.log(data)

                
            } catch (error) {
                console.log(error);
            }

        };
        fecthPost();
        
        
    }, [])
    return (
        <View style={{backgroundColor:'black'}}>
            <FlatList
                data={data}
                renderItem={({item})=><Post post={item}/>}
                snapToAlignment={"start"}
                showsVerticalScrollIndicator={false}
                // es la dimension
                snapToInterval={height}
                decelerationRate={'fast'}
            >

            </FlatList>
        </View>
    )
}

export default Home
