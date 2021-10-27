import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";

const input = ({value, setValue, placeholder, type}) =>{ //value and setValue props 

    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue} //when text changes
            placeholder={placeholder} //for whenever we use it
            style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,

        
    },
    password: {

    },

});

export default input;