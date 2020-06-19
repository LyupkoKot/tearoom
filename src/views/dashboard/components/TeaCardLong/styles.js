import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 105,
    marginTop: 5,
    overflow: "hidden",
  },
  image: {
    position: "absolute",

  },
  title: {
      display: 'flex',
      flexDirection: 'column',

  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#A1A1A1",
  },
  category: {
    color: "#A1A1A1",
    fontSize: 12,
    fontWeight: "500",
  },
});
