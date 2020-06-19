import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    width: deviceWidth-40,
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  label: {
    fontSize: 14
  },
  text: {
    marginTop: 3,
    fontSize: 18
  }
})
