import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../preview/styles";
import { ENUM, previews } from "../../assets/constants";

const Preview = ({navigation}) => {
  const [value, setValue] = useState(ENUM.FIRST);
  const handlePress = (value) => {
    value === ENUM.FOURTH
      ? navigation.navigate("LogIn")
      : setValue(value + 1);
  };
  console.log(value);
  return previews.map(function (item, key) {
    return (
      value === item.value && (
        <View style={styles.container} key={key}>
          <View style={styles.previewImageContainer}>
            <Image style={styles.previewImage} source={item.image} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.label}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.navContainer}>
                <Text
                  style={[
                    styles.navItem,
                    item.value === ENUM.FIRST && styles.navItemActive,
                  ]}
                >
                  01
                </Text>
                <Text
                  style={[
                    styles.navItem,
                    item.value === ENUM.SECOND && styles.navItemActive,
                  ]}
                >
                  02
                </Text>
                <Text
                  style={[
                    styles.navItem,
                    item.value === ENUM.THIRD && styles.navItemActive,
                  ]}
                >
                  03
                </Text>
                <Text
                  style={[
                    styles.navItem,
                    item.value === ENUM.FOURTH && styles.navItemActive,
                  ]}
                >
                  04
                </Text>
              </View>
              <Text>………………………………</Text>
              <View style={styles.exploreContainer}>
                <Text>Explore now</Text>
                <TouchableOpacity onPress={() => handlePress(item.value)}>
                  <View style={styles.nextPlay}>
                    <Image
                      style={{width: 20, height: 20, backgroundColor: 'black'}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )
    );
  });
};

export default Preview;
