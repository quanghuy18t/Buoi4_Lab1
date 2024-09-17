import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { selectFavorite } from '../slices/FavoriteSlice'
import FavoriteCard from '../components/FavoriteCard'
import debounce from 'lodash.debounce'
import { useTranslation } from 'react-i18next'

export default function FavoriteScreen() {
  const favorites = useSelector(selectFavorite);
  const [textSearch, setTextSearch] = useState('');
  const [newFavorite, setNewFavorite] = useState(favorites);
  const { t } = useTranslation(); 

  useEffect(() => {
    setNewFavorite(favorites);
  }, []);

  const searchFromData = async (text) => {
    const lowerText = text.toLowerCase();
    console.log(favorites)
    return favorites.filter(item => 
      item.name.toLowerCase().includes(lowerText)
    );
  };

  const debouncedSearch = useCallback(
    debounce(async (text) => {
      if (text) {
        const results = await searchFromData(text);
        // console.log(results);
        setNewFavorite(results);
      }
      else {
        setNewFavorite(favorites);
      }
    }, 200),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.searchContainer}>
        <View style={styles.searchContent}>
          <Feather name='search' size={25} color='black' />
          <TextInput 
            style={styles.textInputSearch}
            placeholder={t('search')}
            value={textSearch}
            onChangeText={(text) => {
              setTextSearch(text);
              debouncedSearch(text);
            }}
          />
        </View>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            newFavorite && newFavorite.length > 0 ? (
              newFavorite.map((item, index) => {
                return (
                  <FavoriteCard
                    item={item}
                    key={index}
                  />
                )
              })
            ) : (
              <Text>No Favorite</Text>
            )
          }
        </ScrollView>
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