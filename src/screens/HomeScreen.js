import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import Categories from '../components/Categories'
import Feature from '../components/Feature'
import { cheapest, convenient, featured } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'
import { selectCategory } from '../slices/CategorySlice'

export default function HomeScreen() {
  const category = useSelector(selectCategory);

  const filteredItems = ([featured, cheapest, convenient])
  .map(item => ({
    ...item,
    restaurants: category === 'All'
      ? item.restaurants
      : item.restaurants.filter(restaurant => restaurant.category === category),
  }))
  .filter(item => item.restaurants.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      >
        <Categories />
        <View style={{marginTop: 20}}>
          {
           filteredItems.map((item, index) => {
              return (
                <Feature 
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    backgroundColor: 'rgba(251, 146, 60, 1)',
    padding: 12,
    borderRadius: 9999,
    margin: 8,
    marginLeft: -10
  },
})