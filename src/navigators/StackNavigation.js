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
import SettingScreen from '../screens/SettingScreen';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const getDrawerItemIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={22} style={{color: tintColor}} />
)

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

const SettingScreens = () => {
  return (
    <Stack.Navigator initialRouteName='Setting'>
      <Stack.Screen name='Setting' component={SettingScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default function StackNavigation() {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Homes'>
        <Drawer.Screen 
          name='Homes'
          component={HomeScreens} 
          options={{
            drawerIcon: getDrawerItemIcon('home'),
            title: t('home')
          }}
        />
        <Drawer.Screen 
          name='Favorites' 
          component={FavoriteScreens} 
          options={{
            drawerIcon: getDrawerItemIcon('star'),
            title: t('favorite')
          }}
        />
        <Drawer.Screen 
          name='Settings' 
          component={SettingScreens} 
          options={{
            drawerIcon: getDrawerItemIcon('person'),
            title: t('setting')
          }}
        />
      </Drawer.Navigator>

      {/* <Tab.Navigator>
        <Tab.Screen 
          name='Homess' 
          component={HomeScreens}
          options={{
            tabBarIcon: getDrawerItemIcon('home'),
            title: t('home')
          }}
        />
        <Tab.Screen 
          name='Favoritess' 
          component={FavoriteScreens}
          options={{
            tabBarIcon: getDrawerItemIcon('star'),
            title: t('favorite')
          }}
        />
        <Tab.Screen 
          name='Settingss' 
          component={SettingScreens}
          options={{
            tabBarIcon: getDrawerItemIcon('person'),
            title: t('setting')
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  )
}