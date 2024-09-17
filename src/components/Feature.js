import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useSelector } from 'react-redux';
import { selectCategory } from '../slices/CategorySlice';
import { useTranslation } from 'react-i18next';

export default function Feature({title, description, restaurants}) {
  const category = useSelector(selectCategory);
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>{t('seeall')}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{overflow: 'visible', paddingVertical: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
          restaurants.map((restaurant, index) => {
            return (
              <RestaurantCard
                item={restaurant}
                key={index}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#6B7280',
    fontSize: 12,
  },
  seeAll: {
    color: '#f97316',
    fontWeight: '600',
  },
})