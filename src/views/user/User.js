import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import DoubleLabel from '../../components/UIComponents/Labels/DoubleLabel/DoubleLabel'
import { styles } from './styles'
import ButtonRed from '../../components/UIComponents/Buttons/ButtonRed'
import ButtonTransparent from '../../components/UIComponents/Buttons/ButtonTransparent'
import {useSelector} from "react-redux";

const User = ({navigation}) => {
  const user = useSelector(state => state.user);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <Image source={require('../../assets/images/back.png')} />
      </TouchableOpacity>
      <View style={styles.sub_container}>
        <View style={styles.userImage}>
          <Image source={require('../../assets/images/japanese-tea-ceremony.png')}/>
        </View>
        <DoubleLabel label={'name'} text={user.displayName} />
        <DoubleLabel label={'email'} text={user.email} />
      </View>
      <View style={styles.sub_container}>
        <ButtonRed text={'Edit'} onPress={() => navigation.navigate("UserEdit")} />
        <ButtonTransparent text={'Change Password'} onPress={() => navigation.navigate("UserChangePassword")} />
      </View>
    </View>
  )
}

export default User
