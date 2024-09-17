import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({item}) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Restaurant', {...item})}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={item.image}
          resizeMode='stretch'
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rateContainer}>
            <Image
              source={require('../assets/images/rateStart.png')}
              style={{width: 16, height: 16}}
            />
            <Text style={{fontSize: 12}}>
              <Text style={{color: '#064E3B'}}>{item.stars} </Text>
              <Text style={{color: '#374151'}}>({item.reviews} review) - <Text style={{fontWeight: 'bold'}}>{item.category}</Text></Text>
            </Text>
          </View>
          <View style={styles.addressContainer}>
            <Feather name='map-pin' size={15} />
            <Text style={styles.addressText}> {item.address}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 24,
    backgroundColor: '#fff',
    borderRadius: 24,
    elevation: 12,
    shadowColor: 'rgba(251, 146, 60, 10)',
    shadowRadius: 7,
  },
  image: {
    height: 144,
    width: 256,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  nameContainer: {
    paddingHorizontal: 12,
    paddingBottom: 6,
    marginBottom: 8,
    marginTop: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  addressText: {
    color: '#374151',
    fontSize: 12
  }
})