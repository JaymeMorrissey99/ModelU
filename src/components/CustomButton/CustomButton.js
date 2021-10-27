import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
// Pressable

const CustomButton = ({onPress, text, type= 'Primary'}) => { // setting the default v of button to primary

    return (
        //change view to Pressable onPress={onPress}
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}> 
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', //100% of parent
        padding: 15,
        marginVertical: 5,
        // borderColor: 'black',   

        borderRadius: 5,
        alignItems: 'center'
    
    },

    container_Primary: {
        //look at video 30 min
        backgroundColor: '#F96009'
    },

    contianer_Tertiary: {

    },
    container_SELECTION:{
        backgroundColor: '#F96009',
        borderRadius: 100,
        // position: 'relative',
        // left: 100,

        width: 120, //100% of parent
        height: 120,
        padding: 15,
        // marginVertical: 10,
        // borderColor: 'black',   

        // borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'black'
    },
    
    text_Tertiary:{
        color: 'grey'
    },
    // selection_btn:{
    //     backgroundColor: '#F96009',
    //     borderRadius: 100,
    //     // position: 'relative',
    //     // left: 100,

    //     width: 120, //100% of parent
    //     height: 120,
    //     padding: 15,
    //     // marginVertical: 10,
    //     // borderColor: 'black',   

    //     // borderRadius: 5,
    // }

})

export default CustomButton