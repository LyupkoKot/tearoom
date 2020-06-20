import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../login/styles";
import Input from "../../../components/UIComponents/Inputs";
import ButtonRed from "../../../components/UIComponents/Buttons/ButtonRed";
import ButtonTransparent from "../../../components/UIComponents/Buttons/ButtonTransparent";
import * as firebase from 'react-native-firebase'
import validateEmail from '../../../utils/validators'

const SignUp = ({navigation}) => {
  const [email, onChangeEmail] = useState("");
  const [pass1, onChangePass1] = useState("");
  const [name, onChangeName] = useState("");
  const [pass2, onChangePass2] = useState("");

  const handlePress = () => {
    if (pass1 === pass2 && pass1 !== "") {
      firebase.auth().createUserWithEmailAndPassword(email, pass1)
      .then(result => {
        return result.user.updateProfile({
          displayName: name
        })
      })
      navigation.navigate("LogIn")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sign Up</Text>
      <View style={styles.inputsContainer}>
        <Input
          label={"Name"}
          onChange={(text) => onChangeName(text)}
          value={name}
        />
        <Input
          label={"Email"}
          onChange={(text) => onChangeEmail(text)}
          value={email}
        />
        <Input
          label={"Password"}
          onChange={(pass) => onChangePass1(pass)}
          value={pass1}
          isPassword={true}
        />
        <Input
          label={"Repeat Password"}
          onChange={(pass) => onChangePass2(pass)}
          value={pass2}
          isPassword={true}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonRed text={"Sign up"} onPress={handlePress} />
      </View>
    </View>
  );
};

export default SignUp;
