import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/RestaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/CartSlice';
import { useTranslation } from 'react-i18next';

export default function CartScreen() {
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();
  const [groupedItems, setGroupedItems] = useState({});
  const { t } = useTranslation()

  const deliveryFee = 15000;

  const parseVND = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
  }

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems])

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{position: 'relative', paddingVertical: 16, elevation: 2}}>
        <View>
          <Text style={styles.title}>{t('yourcart')}</Text>
          <Text style={styles.name}>{restaurant.name}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/shipper.png')} 
          style={{borderRadius: 9999, width: 50, height: 50, margin: 10}}
        />
        <Text style={{flex: 1, paddingLeft: 16}}>{t('delivery')}</Text>
        <TouchableOpacity>
          <Text style={styles.change}>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        style={{backgroundColor: 'white', paddingTop: 20}}
      >
        {
          Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View key={key} style={styles.foodContainer}>
                <Text style={{fontWeight: 'bold', color: '#f97316'}}>{items.length} x </Text>
                <Image 
                  source={dish.image}
                  style={{height: 40, width: 40, borderRadius: 9999}}
                />
                <Text style={{flex: 1, fontWeight: 'bold', color: '#374151'}}>  {dish.name}</Text>
                <Text style={{fontWeight: '600', fontSize: 16, marginRight: 15}}>{parseVND(dish.price)}</Text>
                <TouchableOpacity 
                  style={styles.minus}
                  onPress={() => dispatch(removeFromCart({id: dish.id}))}
                >
                  <Feather name='minus' size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
      <View style={styles.delivery}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#374151'}}>{t('subtotal')}</Text>
          <Text style={{color: '#374151'}}>{parseVND(cartTotal)}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#374151'}}>{t('deliveryfee')}</Text>
          <Text style={{color: '#374151'}}>{parseVND(deliveryFee)}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#374151', fontWeight: '800'}}>{t('ordertotal')}</Text>
          <Text style={{color: '#374151', fontWeight: '800'}}>{parseVND(deliveryFee + cartTotal)}</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <TouchableOpacity
            style={{backgroundColor: 'rgba(251, 146, 60, 1)', padding: 12, borderRadius: 9999}}
            onPress={() => navigation.navigate('OrderPrepairing')}
          >
            <Text 
              style={{
                color: 'white', 
                textAlign: 'center', 
                fontWeight: 'bold', 
                fontSize: 18
              }}
            >
              {t('placeorder')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  }, 
  name: {
    textAlign: 'center',
    color: '#6B7280',
  },
  container: {
    backgroundColor: 'rgba(251, 146, 60, 0.2)',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  change: {
    fontWeight: 'bold',
    color: '#f97316'
  },
  foodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 24,
    marginHorizontal: 8,
    marginBottom: 12,
    elevation: 20,
    height: 60
  },
  minus: {
    padding: 4,
    borderRadius: 9999,
    backgroundColor: 'rgba(251, 146, 60, 1)'
  },
  delivery: {
    backgroundColor: 'rgba(251, 146, 60, 0.2)',
    padding: 24,
    paddingHorizontal: 32,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  }
})