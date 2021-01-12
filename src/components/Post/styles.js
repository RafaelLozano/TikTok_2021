import { StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
    },
    video: {
        height:'100%',
        width:'100%',
        position:'absolute'
    },
    bottomContainer:{
        backgroundColor:'transparent',
        height:'90%',
        justifyContent:'flex-end',
    },
    title:{
        fontSize:30,
        color:'white'
    },
  
    userName:{
        color:'white',
        fontWeight:'bold',
        fontSize:17,
        marginBottom:5,
    },
    description:{
        color:'white',
        fontSize:17,
        fontWeight:'400',
        marginBottom: 15,
    },
    songName:{
        color:'white',
        fontSize:16,
        marginLeft:10

    },
    bottom:{
        backgroundColor:'rgba(255, 255, 255, 0.25)',
        borderRadius:10,
        marginHorizontal:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    //sideBar container
    iconContainer:{

    },
    sideBar: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-around',
        marginRight:10
    },
    profilePicture:{
        height:50,
        width:50,
        borderRadius:25,
        borderColor:'white',
        borderWidth:2
    },
    statsLabel:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
        marginTop:10
    },
    iconContainer:{
        alignItems:'center'
    },
    songPicture:{
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: 'rgba(125,125,125,.5)',
        borderWidth: 5
    }
}
)

export default styles