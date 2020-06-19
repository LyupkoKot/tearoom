import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

const DoubleLabel = ({ label, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default DoubleLabel
