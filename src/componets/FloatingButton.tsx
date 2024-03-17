import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';


const FloatingButton = () => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                console.log("Button pressed")
            }}
        >
            <Text style={styles.buttonTxt}>Add Todo</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    buttonTxt: {
        fontSize:18,
        fontWeight: "bold",
        color: "white"
    }
});


export default FloatingButton