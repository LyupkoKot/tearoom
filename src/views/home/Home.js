import React from 'react'
import { Alert, Button, View } from 'react-native'
import { styles } from './styles'
import LogIn from "../authorization/login/Log-in";
import SignUp from "../authorization/signup/Sign-up";
import Preview from "../preview/Preview";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardHoc from "../dashboard/DashboardHOC";
import Tea from "../tea/Tea";
import User from "../user/User";
import UserEdit from "../user/userEdit/UserEdit";
import UserChangePassword from "../user/userChangePassword/userChangePassword";


const Home = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preview">
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="Preview" component={Preview} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={DashboardHoc} options={{headerShown: false}}/>
        <Stack.Screen name="Tea" component={Tea} options={{headerShown: false}}/>
        <Stack.Screen name="User" component={User} options={{headerShown: false}}/>
        <Stack.Screen name="UserEdit" component={UserEdit} options={{headerShown: false}}/>
        <Stack.Screen name="UserChangePassword" component={UserChangePassword} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home
