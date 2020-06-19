import React, { useState } from 'react'
import { styles } from './styles'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Input from '../../../components/UIComponents/Inputs'
import ButtonRed from '../../../components/UIComponents/Buttons/ButtonRed'
import { validatePasswordLite } from '../../../utils/validators'
import * as firebase from 'react-native-firebase'

const UserChangePassword = ({navigation}) => {

  let user = firebase.auth().currentUser;

  const [data, setData] = useState({
    password: '',
    passwordSecond: ''
  })

  const [isValidated, setValidated] = useState({
    valid: false,
    match: false
  })

  const handleSave = () => {
    setValidated({
      valid: validatePasswordLite(data.password),
      match: data.password === data.passwordSecond
    })
    user.updatePassword(data.password).then(function(result) {
      if (validatePasswordLite(data.password) && data.password === data.passwordSecond)
        navigation.navigate("User")
      console.log(result.user);
    }).catch(function(error) {
      // An error happened.
    });

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/images/back.png')} />
      </TouchableOpacity>
      <View style={styles.sub_container}>
        <View style={styles.userImage}>
          <Image source={require('../../../assets/images/japanese-tea-ceremony.png')}/>
        </View>
        <Input label={'password'} value={data.password} onChange={value => setData({...data, password: value.toString()})}/>
        {isValidated.valid && <Text>{'Password not valid'}</Text>}
        <Input label={'repeat password'} value={data.passwordSecond} onChange={value => setData({...data, passwordSecond: value.toString()})}/>
        {isValidated.match && <Text>{'Passwords does not match'}</Text>}
      </View>
      <ButtonRed text={'Save'} onPress={handleSave} />
    </View>
  )
}

export default UserChangePassword
