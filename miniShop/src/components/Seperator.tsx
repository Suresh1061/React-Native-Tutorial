import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = () => {
     return (
          <View style={styles.seperator}>
               <Text>Seperator</Text>
          </View>
     )
}

export default Seperator

const styles = StyleSheet.create({
     seperator:{
          height:0.8,
          color:"#cad5e2"
     }
})