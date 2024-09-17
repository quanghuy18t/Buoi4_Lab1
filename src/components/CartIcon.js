import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/CartSlice';

export default function CartIcon() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();

  if (!cartItems.length) return;

  const parseVND = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.cartContainer}
        onPress={() => navigation.navigate('Cart')}
      >
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{cartItems.length}</Text>
        </View>
        <Text style={styles.viewCart}>View Cart</Text>
        <Text style={styles.quantityText}>{parseVND(cartTotal)}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    zIndex: 50,
  },
  cartContainer: {
    backgroundColor: 'rgba(251, 146, 60, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 9999,
    padding: 16,
    paddingVertical: 12,
    elevation: 10
  },
  quantityContainer: {
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 9999,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  quantityText: {
    fontWeight: '800',
    color: 'white',
    fontSize: 18
  },
  viewCart: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    color: 'white'
  },
})