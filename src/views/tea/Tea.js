import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import {useSelector} from "react-redux";

const Tea = ({ navigation }) => {

  const [active, setActive] = useState(0)
  const tea = useSelector(state => state.tea);

  return (
    <View style={styles.container}>
      <View style={styles.presentationContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/back.png')} />
        </TouchableOpacity>
        <Image style={styles.image} source={tea.image}/>
        <View>
          <View style={styles.statBox}>
            <View style={styles.statBox_image}/>
            <Text style={styles.statBox_label}>{`${tea.portionSize} grams`}</Text>
          </View>
          <View style={styles.statBox}>
            <View style={styles.statBox_image}/>
            <Text style={styles.statBox_label}>{`${tea.temperatureToCook} °C`}</Text>
          </View>
          <View style={styles.statBox}>
            <View style={styles.statBox_image}/>
            <Text style={styles.statBox_label}>{`${tea.timeToCook} minutes`}</Text>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles.text_primary}>
            {tea.title}
          </Text>
          <Text style={styles.text_secondary}>
            {tea.kind}
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.info_header}>
          <Text style={styles.info_header_element} onPress={() => setActive(0)}>{'Description'}</Text>
          <Text style={styles.info_header_element} onPress={() => setActive(1)}>{'Tasting notes'}</Text>
          <Text style={styles.info_header_element} onPress={() => setActive(2)}>{'Ingredients'}</Text>
        </View>
        <View style={{...styles.info_header_line_active, width: active === 0 ? 85 : active === 1 ? 98 : 82, left: active === 0 ? 0 : active === 1 ? 140 : 292}}>{}</View>
        <View style={styles.info_header_line}>{}</View>
        <View style={styles.info_body}>
          <Text style={styles.info_text}>
            {active === 0 && tea.description}
            {active === 1 && tea.tastingNotes}
            {active === 2 && tea.ingredients}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Tea
