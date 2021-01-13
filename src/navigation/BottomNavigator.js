import React from 'react'
import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home';
import { Entypo, Feather, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle:{
                backgroundColor:'black'
            },
            activeTintColor:'white'
        }}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color="white" />
                    ),
                }}
                
            />
            <Tab.Screen 
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={24} color="white" />
                    ),
                }}
            />
            <Tab.Screen 
                name="Upload"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../assets/images/plus-icon.png')} style={{height:32,resizeMode:'contain'}} />
                    ),
                    tabBarLabel:() => null
                }}
            />
            <Tab.Screen 
                name="Inbox"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="message-minus-outline" size={24} color="white" />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={24} color="white" />
                    ),
                }}
            />

           
        </Tab.Navigator>
    )
}

export default BottomNavigator
