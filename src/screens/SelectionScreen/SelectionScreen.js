import React from "react";
import { View, Text, StyleSheet} from "react-native";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native"


const SelectionScreen = () =>{

    const navigation = useNavigation();

    const ModelPress = () => {
        console.warn('Model Selected')

        navigation.navigate('Model_Screen');

    }

    const PhotographerPress = () =>{
        console.warn('Photographer Selected')

        navigation.navigate('Photographer');
        // navigation.navigate("Model_Register")
    }

    const CompanyPress = () =>{
        console.warn('Company Selected')

        navigation.navigate('Company');
    }


    //calling the 'SELECTION' button from the CustomButton.js file
    return(
        <><View style={styles.container}>
            <CustomButton 
                text="Model" 
                onPress={ModelPress}
                type='SELECTION'/>
        </View><View style={styles.c2}>
                <CustomButton 
                text="Photographer"
                onPress={PhotographerPress}
                type='SELECTION'/>
                <CustomButton
                text="Company"
                onPress={CompanyPress}
                type='SELECTION'/>
                
            </View></>

        //VIDEO 27 MINUTES ON THE FORGOT PASSWORD
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    c2: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    } 
});

export default SelectionScreen;