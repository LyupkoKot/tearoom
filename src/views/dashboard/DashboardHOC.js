import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './Dashboard'
import User from '../user/User'

const DashboardHoc = () => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{drawerPosition: 'right', gestureEnabled: false}}>
      <Drawer.Screen name="User" component={User} />
      <Drawer.Screen name="Home" component={Dashboard} />
    </Drawer.Navigator>
  )
}

export default DashboardHoc
