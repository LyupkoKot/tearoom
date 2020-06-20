import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 18,
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  appBarButton: {
    width: 30,
    height: 18,
    marginRight: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 21,
    marginTop: 40,
    backgroundColor: "#FFFFFF",
  },
  labelCategoriesContainer: {
    display: "flex",
    flexDirection: "column",
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  teaCardsContainer: {
    height: 250,
  },
  popularContainer: {
    marginRight: 21,
  },
  popular: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 30,
  },
  empty_data_text: {
    marginTop: 100,
    marginLeft: 120
  }
});
