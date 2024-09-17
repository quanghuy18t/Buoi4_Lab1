import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, Feather } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../slices/RestaurantSlice';
import { addToFavorite, removeFromFavorite, selectFavoriteById } from '../slices/FavoriteSlice';

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { params } = useRoute();
  let item = params;

  const favorite = useSelector(state =>selectFavoriteById(state, item.name))

  useEffect(() => {
    navigation.setOptions({drawerLabel: item.name});
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  }, []);

  return (
    <View>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView>
        <View>
          <Image
            style={{width: '100%', height:288}}
            source={item.image}
          />
          <Pressable
            style={styles.goBack}
            onPress={() => {
              if (favorite) {
                dispatch(addToFavorite({...item}));
              } else {
                dispatch(removeFromFavorite({name: item.name}));
              }
            }}
          >
            <AntDesign 
              name= {favorite ? 'heart' : 'hearto'}
              size={20} 
              color={'rgba(251, 146, 60, 1)'} 
            />
          </Pressable>
        </View>
        <View style={styles.container}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.rateContainer}>
                <Image
                  source={require('../assets/images/rateStart.png')}
                  style={{width: 16, height: 16}}
                />
                <Text style={{fontSize: 14}}>
                  <Text style={{color: '#064E3B'}}>{item.stars} </Text>
                  <Text style={{color: '#374151'}}>({item.reviews} review) - <Text style={{fontWeight: 'bold'}}>{item.category}</Text></Text>
                </Text>
              </View>
              <View style={styles.addressContainer}>
                <Feather name='map-pin' size={15} />
                <Text style={styles.addressText}> {item.address}</Text>
              </View>
            </View>
            <Text style={{color: '#6b7280', marginTop:8}}>{item.description}</Text>
          </View>
        </View>
        <View style={{paddingBottom: 144, backgroundColor: 'white'}}>
          <Text style={styles.menu}>Menu</Text>
          {
            item.dishes.map((dish, index) => 
              <DishRow item={{...dish}} key={index} />
            )
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  goBack: {
    position: 'absolute',
    top: 20,
    right: 10,
    backgroundColor: '#f9fafb',
    padding: 8,
    borderRadius: 9999,
    elevation: 4,
  },
  container: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    marginTop: -48,
    paddingTop: 24,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: 4
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  addressText: {
    color: '#374151',
    fontSize: 14
  },
  menu: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 24,
    fontWeight: 'bold'
  }
})