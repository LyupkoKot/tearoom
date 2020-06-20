import React, {useCallback, useState, useEffect} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {categories, CATEGORIES, tea} from '../../assets/constants/index';
import {styles} from './styles';
import Category from './components/Category';
import TeaCard from './components/TeaCard';
import TeaCardLong from './components/TeaCardLong';
import {useDispatch} from 'react-redux';
import {setTeaValue, setUserValue} from '../../store/actions';
import * as firebase from 'react-native-firebase'

const Dashboard = ({navigation}) => {
  const [value, setValue] = useState(categories[0].value);
  const inset = useSafeArea();
  const dispatch = useDispatch();
  const setTea = useCallback(val => dispatch(setTeaValue(val)), [dispatch]);
  const [data, setData] = useState()
  const [popular, setPopular] = useState()

  const handlePress = val => {
    setTea(val);
    navigation.navigate('Tea');
  };

  useEffect(() => {
    firebase.firestore().collection('tea').get().then(querySnapshot => {
      const arrayData = []
      querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot._data)
        arrayData.push(documentSnapshot._data)
      })
      setData(arrayData)
    })
    firebase.firestore().collection('tea').get().then(querySnapshot => {
      const arrayData = []
      querySnapshot.forEach(documentSnapshot => {
        console.log(documentSnapshot._data)
        arrayData.push(documentSnapshot._data)
      })
      setPopular(arrayData)
    })
  }, [])

  const teas = data ? data.filter(item => item.category === value) : []
  const popularTea = popular ? popular.filter(item => item.category === value) : []

  return (
    <View style={{paddingTop: inset.top, ...styles.container}}>
      <TouchableOpacity
        style={styles.appBar}
        onPress={() => navigation.toggleDrawer()}>
        <Image
          style={styles.appBarButton}
          source={require('../../assets/images/burger.png')}
        />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.labelCategoriesContainer}>
          <Text style={styles.mainTitle}>Fresh From Origin</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((item, key) => (
              <Category
                item={item}
                key={key}
                onPress={() => setValue(item.value)}
                isActive={item.value === value}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <ScrollView
            style={styles.teaCardsContainer}
            horizontal={true}
            scrollEnabled={typeof teas[0] !== 'undefined'}
            showsHorizontalScrollIndicator={false}>
            {typeof teas[0] !== 'undefined'
            ? teas.map((item, key) => (
              <TeaCard
                item={item}
                key={key}
                onPress={()=>handlePress(item)}
              />
            ))
            : <Text style={styles.empty_data_text}>{'No tea of this kind'}</Text>
          }
          </ScrollView>
        </View>
        <View>
          <Text style={styles.popular}>Popular</Text>
          <ScrollView
          scrollEnabled={typeof popularTea[0] !== 'undefined'}
          showsVerticalScrollIndicator={false}>
            {typeof popularTea[0] !== 'undefined'
            ? popularTea.map((item, key) => (
              <TeaCardLong item={item} key={key} />
              ))
            : <Text style={styles.empty_data_text}>{'No popular tea of this kind'}</Text>
            }
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
