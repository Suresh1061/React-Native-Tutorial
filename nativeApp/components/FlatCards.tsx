import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const FlatCards = () => {
     return (
          <View>
               <Text style={styles.heading}>FlatCards</Text>
               <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                         <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                         <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.CardThree]}>
                         <Text>Red</Text>
                    </View>
               </View>
          </View>
     )
}

export default FlatCards

const styles = StyleSheet.create({
     heading: {
          fontSize: 25,
          fontWeight: 'bold',
          marginHorizontal: 8,
     },
     container: {
          flex: 1,
          flexDirection: 'row',
          padding: 8,
     },
     card: {
          width: 100,
          height: 100,
          borderRadius: 5,
          margin: 8,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     cardOne: {
          backgroundColor: '#ef5354',
     },
     cardTwo: {
          backgroundColor: '#42a5f5',
     },
     CardThree: {
          backgroundColor: '#66bb6a',
     },
     cardFour: {
          backgroundColor: '#ffa726',
     }
})