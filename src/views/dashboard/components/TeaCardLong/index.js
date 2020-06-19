import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const TeaCardLong = (item) => {
  return (
    <View style={styles.container}>
      {/*<Image source={item.image} style={styles.image}/>*/}
      <View style={styles.title}>
        <Text style={styles.label}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default TeaCardLong;
