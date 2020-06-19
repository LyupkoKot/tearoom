import React from "react";
import { Text, View } from "react-native";
import { styles } from "../login/styles";
import Input from "../../../components/UIComponents/Inputs";
import ButtonRed from "../../../components/UIComponents/Buttons/ButtonRed";
import ButtonTransparent from "../../../components/UIComponents/Buttons/ButtonTransparent";

const SignUp = () => {
  const [email, onChangeEmail] = React.useState("");
  const [pass1, onChangePass1] = React.useState("");
  const [name, onChangeName] = React.useState("");
  const [pass2, onChangePass2] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sign Up</Text>
      <View style={styles.inputsContainer}>
        <Input
          label={"Name"}
          onChangeText={(text) => onChangeName(text)}
          value={name}
        />
        <Input
          label={"Email"}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
        <Input
          label={"Password"}
          onChangeText={(pass) => onChangePass1(pass)}
          value={pass1}
        />
        <Input
          label={"Repeat Password"}
          onChangeText={(pass) => onChangePass2(pass)}
          value={pass2}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonRed text={"Sign up"} />
      </View>
    </View>
  );
};

export default SignUp;
