import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import HistoryView from '../components/HistoryView'

export default function HistoryScreen () {
  return (
    <ScrollView style={styles.container}>
      <HistoryView/>
    </ScrollView>
  )
}

HistoryScreen.navigationOptions = {
  title: 'History'

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#d6e9d7'
  }
})
