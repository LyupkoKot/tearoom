import React, {useCallback} from "react";
import { View, Text } from "react-native";
import { styles } from "../../authorization/login/styles";
import Input from "../../../components/UIComponents/Inputs";
import ButtonRed from "../../../components/UIComponents/Buttons/ButtonRed";
import ButtonTransparent from "../../../components/UIComponents/Buttons/ButtonTransparent";
import {useDispatch} from "react-redux";
import {setUserValue} from "../../../store/actions";
import * as firebase from "react-native-firebase";
const LogIn = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePassword] = React.useState("");
  const dispatch = useDispatch();
  const setUser = useCallback(val => dispatch(setUserValue(val)), [
    dispatch
  ]);

  const onSubmit = () => {
    firebase.auth()
      .signInWithEmailAndPassword(email, pass)
      .then((result) => {
        setUser(result.user);
        navigation.navigate("Dashboard");
        console.log(result.user);

      })
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome</Text>
      <View style={styles.inputsContainer}>
        <Input
          label={"Email"}
          onChange={(text) => onChangeEmail(text)}
          value={email}
        />
        <Input
          label={"Password"}
          onChange={(pass) => onChangePassword(pass)}
          value={pass}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonRed
          text={"Log in"}
          onPress={onSubmit}
        />
        <ButtonTransparent
          text={"Sign up"}
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default LogIn;
