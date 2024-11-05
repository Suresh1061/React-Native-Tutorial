import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vegBiryani } from '../constant'

const FancyCard = () => {
     return (
          <View>
               <Text style={styles.heading}>Trending Item</Text>
               <ScrollView>
                    <View style={styles.card}>
                         <Image
                              source={vegBiryani}
                              style={styles.imageCard}
                         />
                         <Text style={[styles.subHeading, styles.cardBody]}>Vegetable Biryani</Text>
                         <Text style={[styles.description, styles.cardBody]}>
                         Veg biryani is a fragrant rice dish cooked with mixed vegetables, aromatic spices, and herbs, often served with raita or salad.
                         </Text>
                    </View>
               </ScrollView>
          </View>
     )
}

export default FancyCard

const styles = StyleSheet.create({
     heading: {
          fontSize: 25,
          fontWeight: 'bold',
          marginHorizontal: 8,
     },
     card: {
          width: 350,
          height: 350,
          borderRadius: 6,
          marginVertical: 12,
          marginHorizontal: 16,
          backgroundColor: '#fff',
     },
     cardBody:{
          // flex:1,
          // flexGrow:1,
          paddingHorizontal:12,
          textAlign:'center',
          color:'#000'
     },
     imageCard: {
          width:"100%",
          height: 250,
          objectFit:'fill',
          borderTopLeftRadius:6,
          borderTopRightRadius:6
     },
     subHeading: {
          fontSize: 20,
          fontWeight: '500',
          margin: 2
     },
     description: {
          fontSize: 16,
          margin: 2
     }
})