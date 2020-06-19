import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: 80
  },
  presentationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  backButton: {
    width: 30,
    height: 19,
    position: 'absolute',
    top: -40
  },
  image: {
    width: 374,
    height: 500,
    position: 'absolute',
    left: 90,
    bottom: 30
  },
  statBox: {
    height: 110,
    width: 110,
    backgroundColor: 'black',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    marginTop: 20
  },
  statBox_image: {
    width: 60,
    height: 60
  },
  statBox_label: {
    marginTop: 15,
    fontSize: 14,
    color: '#ffffff'
  },
  text: {
    width: '100%',
    marginTop: 50
  },
  text_primary: {
    fontSize: 26,
    color: '#18191b'
  },
  text_secondary: {
    fontSize: 18,
    color: '#a1a1a1'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15
  },
  info_header: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info_header_element: {
    color: '#18191b',
    fontSize: 16
  },
  info_header_line: {
    width: deviceWidth,
    height: 1,
    left: -20,
    position: 'absolute',
    top: 30,
    backgroundColor: '#eeeeee'
  },
  info_header_line_active: {
    height: 2.5,
    width: 90,
    position: 'absolute',
    top: 29.5,
    backgroundColor: '#d25342',
    zIndex: 1000
  },
  info_body: {
    marginTop: 20
  },
  info_text: {
    fontSize: 14,
    color: '#a1a1a1'
  }
})
