import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from'@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'

import BottomNavigator from './BottomNavigator';
const stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>
                <stack.Screen 
                    name={"Home"}
                    component={BottomNavigator}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
