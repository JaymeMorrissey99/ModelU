import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import StartScreen from "../screens/StartScreen";
import SelectionScreen from '../screens/SelectionScreen/SelectionScreen';
import ResetPassword from '../screens/ResetPassword';
import ModelScreen from "../screens/ModelScreen/ModelScreen";
import Company from "../screens/CompanyScreen"
// import Photographer from "../screens/PhotogScreen/Photographer";
import PhotogScreen from "../screens/PhotogScreen";
import Home from "../screens/HomeScreen/Home";


const Stack = createNativeStackNavigator();

const nav = () => {
    return(
        <NavigationContainer>
            {/* making sure the header on all screens is gone */}
            <Stack.Navigator screenOptions={{headerShown: false}}>  
            <Stack.Screen name="Starting_Screen" component={StartScreen}/>
            <Stack.Screen name="Login_Screen" component={LoginScreen}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Reset_Password" component={ResetPassword}/>
            <Stack.Screen name="Selection_Screen" component={SelectionScreen}/>
            <Stack.Screen name="Model_Screen" component={ModelScreen}/>
            <Stack.Screen name="Photographer" component={PhotogScreen}/>
            <Stack.Screen name="Company" component={Company}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default nav;