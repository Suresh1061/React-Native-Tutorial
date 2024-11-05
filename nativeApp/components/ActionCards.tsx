import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCards = () => {
     function openWebsite(websiteLink: string) {
          Linking.openURL(websiteLink);
     }
     return (
          <View>
               <Text style={styles.heading}>Blog Card</Text>
               <View style={[styles.card, styles.ElevatedCard]}>
                    <View style={styles.headingContainer}>
                         <Text style={styles.headerText}>
                              What's new in javscript ES7
                         </Text>
                    </View>

                    <Image
                         source={{
                              uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1646329246679/b_ghoCZri.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                         }}
                         style={styles.imageCard}
                    />
                    <View style={styles.bodyContainer}>
                         <Text numberOfLines={3} style={{ color: '#000' }}>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus esse repellat reiciendis cupiditate omnis blanditiis ex ipsam veniam. Eos nostrum nulla atque non!
                         </Text>
                    </View>
                    <View style={styles.footerContainer}>
                              <TouchableOpacity
                                   onPress={() => openWebsite('https://wordssaysalot.hashnode.dev/some-awesome-features-of-javascript-ecmascript-2016-es7')}
                              >
                                   <Text style={styles.socialLinks}>Read More</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                   onPress={() => openWebsite("https://github.com/Suresh1061")}
                              >
                                   <Text style={styles.socialLinks}>Follow Me</Text>
                              </TouchableOpacity>
                    </View>
               </View>
          </View>
     )
}

export default ActionCards

const styles = StyleSheet.create({
     heading: {
          fontSize: 25,
          fontWeight: 'bold',
          marginHorizontal: 8,
     },
     card: {
          width: 350,
          height: 360,
          borderRadius: 6,
          marginVertical: 12,
          marginHorizontal: 16,
     },
     ElevatedCard: {
          backgroundColor: '#fff',
          color: '#000',
          elevation: 3,
          shadowOffset: {
               width: 1,
               height: 1
          },
          shadowColor: '#333',
          shadowOpacity: 0.4
     },
     headingContainer: {
          height: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
     },
     headerText: {
          color: '#000',
          fontSize: 15,
          fontWeight: '600',
     },
     imageCard: {
          height: 200,
          objectFit: 'fill',
     },
     bodyContainer: {
          padding: 10,
          color: '#000',
     },
     footerContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
     },
     socialLinks: {
          color: '#fff',
          fontSize: 15,
          fontWeight: '600',
          backgroundColor: '#333945',
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 6,
     }
})