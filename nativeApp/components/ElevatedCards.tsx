import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { burgar, chicken, cripsyFriedChicken, momo, spaghetti } from '../constant'

const fastFood = [burgar, cripsyFriedChicken, momo, spaghetti, chicken]

const ElevatedCards = () => {
     return (
          <View>
               <Text style={styles.heading}>Fast Food Items</Text>
               <ScrollView horizontal style={styles.container}>
                    {fastFood.map(item => (
                         <View style={[styles.card]} key={item}>
                              <Image
                                   source={item}

                                   style={styles.imageCard}
                              />
                         </View>
                    ))}
               </ScrollView>
          </View>
     )
}

export default ElevatedCards

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
          margin: 8,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     imageCard: {
          width: 100,
          height: 100,
          borderRadius: 5,
          elevation: 4,
          shadowOffset: {
               width: 1,
               height: 1
          }
     }
})