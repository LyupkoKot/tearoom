import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 120,
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  sub_container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden'
  },
  backButton: {
    width: 30,
    height: 19,
    position: 'absolute',
    top: 40,
    left: 20
  },
})
