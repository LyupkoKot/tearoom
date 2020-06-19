import React, {useCallback, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {categories, CATEGORIES, tea} from '../../assets/constants/index';
import {styles} from './styles';
import Category from './components/Category';
import TeaCard from './components/TeaCard';
import TeaCardLong from './components/TeaCardLong';
import {useDispatch} from 'react-redux';
import {setTeaValue, setUserValue} from '../../store/actions';

const Dashboard = ({navigation}) => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const setTea = useCallback(val => dispatch(setTeaValue(val)), [dispatch]);
  const inset = useSafeArea();
  const handlePress = val => {
    setTea(val);
    navigation.navigate('Tea');
  };
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
            {[
              {
                title: 'Loose leaf',
                value: CATEGORIES.LOOSE,
              },
              {
                title: 'Sachets',
                value: CATEGORIES.SACHETS,
              },
              {
                title: 'Matcha',
                value: CATEGORIES.MATCHA,
              },
            ].map((item, key) => (
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
            showsHorizontalScrollIndicator={false}>
            {tea.map((item, key) => (
              <TeaCard
                item={item}
                key={key}
                onPress={()=>handlePress(item)}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.popular}>Popular</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {tea.map((item, key) => (
              <TeaCardLong item={item} key={key} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
