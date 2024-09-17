import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants';
import { useDispatch } from 'react-redux';
import { setCategory } from '../slices/CategorySlice';

export default function Categories() {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{marginTop: 8}}>
      <FlatList 
        data={categories}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{paddingHorizontal: 15}}
        keyExtractor={(item) => item._id}
        renderItem={({item, index}) => {
          let isActive = item.id === activeCategory; 
          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity 
                style={[styles.categoryButton, {backgroundColor: isActive ? '#4b5563' : '#d1d5db'}]}
                onPress={() => {
                  setActiveCategory(item.id)
                  dispatch(setCategory(item.name))
                }}
              >
                <Image 
                  style={{width: 45, height: 45}}
                  source={item.image} 
                />
              </TouchableOpacity>
              <Text 
                style={[styles.categoryText, {color: isActive ? '#1F2937' : '#6B7280'}]}
              >{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  categoryButton: {
    padding: 4,
    borderRadius: 9999,
    elevation: 5,
    backgroundColor: '#d1d5db',
  },
  categoryText: {
    fontSize: 14,
    lineHeight: 20,
  },
})