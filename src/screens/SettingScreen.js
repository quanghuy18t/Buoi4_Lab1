import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DetailListItem from '../components/DetailListItem'
import { useTranslation } from 'react-i18next';

export default function SettingScreen() {
  const [ show, setShow ] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <View style={styles.container}>
      <DetailListItem title={t('update')} />
      <TouchableOpacity onPress={() => setShow(!show)}>
        <DetailListItem title={t('change')} onPress={() => setShow(!show)} />
      </TouchableOpacity>
      {show && (
        <View style={styles.languageContainer}>
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => changeLanguage('en')}
          >
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => changeLanguage('vi')}
          >
            <Text>Việt Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.languageButton}
            onPress={() => changeLanguage('jp')}
          >
            <Text>日本</Text>
          </TouchableOpacity>
        </View>
      )}
      <DetailListItem title={t('signout')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  languageContainer: {
    flexDirection: 'column',
    paddingLeft: 40,
  },
  languageButton: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: '#d8d8d8',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
  }
})