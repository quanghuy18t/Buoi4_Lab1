import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCarItemById } from '../slices/CartSlice';

export default function DishRow({item}) {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCarItemById(state, item.id));

  const parseVND = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
  }

  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}));
  }
  const handleIncrease = () => {
    dispatch(addToCart({...item}))
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={item.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={{fontSize:20}}>{item.name}</Text>
          <Text style={{color:'#374151'}}>{item.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {parseVND(item.price)}
          </Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity
              style={styles.buttonQuantity}
              onPress={handleDecrease}
              disabled={!totalItems.length}
            >
              <Feather name="minus" size={20} color={'white'} />
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 12}}>{totalItems.length}</Text>
            <TouchableOpacity
              style={styles.buttonQuantity}
              onPress={handleIncrease}
            >
              <Feather name="plus" size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 24,
    elevation: 18,
    marginBottom: 12,
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 9999,
  },
  infoContainer: {
    display: 'flex',
    flex: 1,
    
  },
  textContainer: {
    paddingLeft: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    alignItems: 'center',
  },
  price: {
    color: '#374151',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonQuantity: {
    padding: 4,
    borderRadius: 9999,
    backgroundColor: 'rgba(251, 146, 60, 1)'
  },
})