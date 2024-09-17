import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { selectFavorite } from '../slices/FavoriteSlice'
import Feature from '../components/Feature'
import RestaurantCard from '../components/RestaurantCard'

export default function FavoriteScreen() {
  const favorites = useSelector(selectFavorite);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <Feather name='search' size={25} color='black' />
          <TextInput 
            style={styles.textInputSearch}
            placeholder='Search Food' 
          />
        </View>
      </View>
      <View style={{marginTop: 20, alignItems: 'center', width: 400}}>
          {
            favorites && favorites.length > 0 ? (
              favorites.map((item, index) => {
                return (
                  <RestaurantCard
                    item={item}
                    key={index}
                  />
                )
              })
            ) : (
              <Text>No Favorite</Text>
            )
          }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  textInputSearch: {
    flex: 1,
    marginLeft: 8,
  },
})