import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonRed from '../../../components/UIComponents/Buttons/ButtonRed';
import Input from '../../../components/UIComponents/Inputs';
import {validateEmail} from '../../../utils/validators';
import * as firebase from 'react-native-firebase';
import {useDispatch} from 'react-redux';
import {setUserValue} from '../../../store/actions';
const UserEdit = ({navigation}) => {
  let user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const setUser = useCallback(val => dispatch(setUserValue(val)), [dispatch]);

  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const [isValidated, setValidated] = useState(true);
  console.log(user);
  const handleSave = () => {
    setValidated(validateEmail(data.email));
    user
      .updateProfile({
        displayName: data.name,
        email: data.email,
      })
      .then(() =>{
          setUser(firebase.auth().currentUser);
          navigation.navigate("User");
          console.log(result);

      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/images/back.png')} />
      </TouchableOpacity>
      <View style={styles.sub_container}>
        <View style={styles.userImage}>
          <Image
            source={require('../../../assets/images/japanese-tea-ceremony.png')}
          />
        </View>
        <Input
          label={'name'}
          value={data.name}
          onChange={value =>
            setData({...data, name: value.toString().toLowerCase()})
          }
        />
        <Input
          label={'email'}
          value={data.email}
          onChange={value =>
            setData({...data, email: value.toString().toLowerCase()})
          }
        />
        {!isValidated && (
          <Text>{'Not valid email address, please check accuracy'}</Text>
        )}
      </View>
      <ButtonRed text={'Save'} onPress={handleSave} />
    </View>
  );
};

export default UserEdit;
