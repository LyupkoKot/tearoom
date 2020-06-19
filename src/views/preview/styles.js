import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    marginTop: 100
  },
  previewImageContainer: {
    height: 450,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,

    marginTop: 6,
    marginLeft: 21,
    marginRight: 21,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    display: "flex",
  },
  label: {
    fontSize: 41,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#9C9C9C",
  },
  footerContainer: {
    display: "flex",
    position: 'absolute',
    bottom: 0,
    flexDirection: "row",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
  },
  navItem: {
    marginRight: 10,
    fontSize: 14,
  },
  navItemActive: {
    fontWeight: "bold",
    fontSize: 20,
  },

  exploreContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  nextPlay: {
    marginLeft: 10,
  },
});
