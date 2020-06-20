import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { styles } from "./styles";

const TeaCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {item.image && <Image source={item.image} style={styles.image} />}
        <View style={styles.title}>
          <Text style={styles.label}>{item.title}</Text>
          <Text>{item.kind}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TeaCard;
