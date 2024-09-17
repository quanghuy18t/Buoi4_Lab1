import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../slices/CartSlice';

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate('Home');
    dispatch(emptyCart);
  }

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        mapType='standard'
      >
        <Marker 
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={'rgba(251, 146, 60, 1)'}
        />
      </MapView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View>
            <Text style={{fontSize: 18, color: '#4a5568', fontWeight: '600'}}>
              Estimated Arrival
            </Text>
            <Text style={{fontSize: 30, color: '#4a5568', fontWeight: '800'}}>
              20-30 Minutes
            </Text>
            <Text style={{marginTop: 8, color: '#4a5568', fontWeight: '600'}}>
              Your order is own its way!
            </Text>
          </View>
          <Image 
            source={require('../assets/images/bikeGuy.gif')}
            style={{width: 100, height: 100}}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: -48,
    backgroundColor: 'white',
    position: 'relative',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  }
})