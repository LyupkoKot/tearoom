import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#EEEEEE",
    width: 190,
    marginTop: 23,
    marginRight: 14,
    overflow: "hidden",
    borderRadius: 1
  },
  image: {
      position: 'absolute',
    bottom: 45,
      right: 0,
  },
  title: {
    position: "absolute",
    left: 10,
    top: 180,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#A1A1A1",
  },
});
