import React from 'react';
import { Alert, Button, View, Text, TextInput } from 'react-native'
import {styles} from "./styles";

const Input = (props) => {
    return (
        <View style={styles.inputContainer}>

            <Text
                style={styles.text}
            >
                {props.label}
            </Text>
           <TextInput
               style={styles.input}
               {...props}
               value={props.value}
               onChangeText={props.onChange}
           />
        </View>
    );
};

export default Input;
