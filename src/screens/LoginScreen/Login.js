import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
// import ModelU_Logo from "../../../assests/images/ModelU_Logo.jpg"
import Logo from '../../../assests/images/ModelU_Logo.jpg'
import Inputs from "../../components/Inputs";
import CustomButton from "../../components/CustomButton";
// import input from './src/components/Inputs';
import { useNavigation } from "@react-navigation/native";

const Login = () =>{

    const navigation = useNavigation();

    const onSignInPress = () => {
        console.warn('sign in')
        // Validation code + database

        navigation.navigate('Home');


    }
    
    const onForgotPassPress = () =>{
        console.warn('Forgot Password')

        navigation.navigate('Reset_Password');
    }


    return(
        <View style={styles.root}>
            <Image source ={Logo} style={styles.logo}/>
            <Inputs placeholder="Username"/>
            <Inputs placeholder="Password" textContentType={'password'}/>

            <CustomButton text="Sign In" onPress={onSignInPress}/>

            <CustomButton 
            text="Forgot Password?" 
            onPress={onForgotPassPress}
            type="TERTIARY"/>
        </View>
        //VIDEO 27 MINUTES ON THE FORGOT PASSWORD
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        resizeMode: "contain",
        height: 250,
        width: 300
    }, 
});

export default Login;