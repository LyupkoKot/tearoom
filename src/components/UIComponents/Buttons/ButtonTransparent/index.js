import React from 'react';
import {styles} from "./styles";
import {TouchableOpacity, Text, View} from "react-native";

const ButtonTransparent = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonTransparent;
