import React from "react";
import { View, Text, StyleSheet} from "react-native";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();

// const onLoginPressed = () => {
//     console.warn('sign in')
//     // validate
//     navigation.navigate('Login');
// }

// const onRegisterPress = () =>{
//     console.warn('Forgot Password')


// }

const StartScreen = () =>{

    const navigation = useNavigation();

    const onLoginPressed = () => {
        console.warn('sign in')
        // validate
        navigation.navigate('Login_Screen');
    }
    
    const onRegisterPress = () =>{
        console.warn('Select Type')
    
        navigation.navigate('Selection_Screen');
    }
    return(
        <View>
            <Text style={styles.title}>{'Hello! \nWelcome to ModelU.\nPlease Pick one of the Options below'}</Text>

            <CustomButton text="Login" onPress={onLoginPressed}/>
            <CustomButton text="Register" onPress={onRegisterPress}/>
           
        </View>
        //VIDEO 27 MINUTES ON THE FORGOT PASSWORD
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 70
    },
    btns: {
        
    }, 
});

export default StartScreen;