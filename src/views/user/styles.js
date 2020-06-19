import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 120,
    paddingVertical: 100,
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  sub_container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
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
