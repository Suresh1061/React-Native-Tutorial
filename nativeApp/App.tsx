import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%', backgroundColor:'#414141'}}>
      <ScrollView >
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCards/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App