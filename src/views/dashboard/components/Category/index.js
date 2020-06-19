import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Category = ({ item, onPress, isActive }) => {
  return (
    <View style={styles.categoriesList}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[styles.categoryContainer, isActive && styles.categoryActive]}
        >
          <Text style={[styles.categoryTitle, isActive && styles.categoryTitleActive]}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
