import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoriesList: {
    marginTop: 30,
  },
  categoryContainer: {
    position: "relative",
    height: 75,
    width: 120,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    borderRadius: 17.5,
    borderColor: "#9C9C9C",
    borderWidth: 1,
  },
  categoryTitle: {
    position: "absolute",
    fontSize: 12,
    color: "#9C9C9C",
    top: 45,
    left: 18,
  },
  categoryTitleActive: {
    color: "#FFFFFF",
  },
  categoryActive: {
    borderColor: "transparent",
    borderWidth: 0,
    backgroundColor: "#D25342",
  },
});
