import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import CartScreen from '../screens/CartScreen';
import OrderPrepairingScreen from '../screens/OrderPrepairingScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      <Stack.Screen name='Cart' component={CartScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen name='OrderPrepairing' component={OrderPrepairingScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen name='Delivery' component={DeliveryScreen} options={{presentation: 'fullScreenModal'}} />
    </Stack.Navigator>
  )
}

const FavoriteScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName='Favorite'
    >
      <Stack.Screen name='Favorite' component={FavoriteScreen} options={{headerShown: false}} />
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
      <Stack.Screen name='Cart' component={CartScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen name='OrderPrepairing' component={OrderPrepairingScreen} options={{presentation: 'fullScreenModal'}} />
      <Stack.Screen name='Delivery' component={DeliveryScreen} options={{presentation: 'fullScreenModal'}} />
    </Stack.Navigator>
  )
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Homes'>
        <Drawer.Screen name='Homes' component={HomeScreens} />
        <Drawer.Screen name='Favorites' component={FavoriteScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}