import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../Container/Home/Home';
const Stack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false ,animation: 'slide_from_right'}} >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeScreen