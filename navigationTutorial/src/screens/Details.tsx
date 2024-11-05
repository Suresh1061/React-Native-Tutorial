import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">

const Details = ({route}:DetailsProps) => {
     const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Details">>()
     const {productId} = route.params
     return (
          <View style={styles.container}>
               <Text style={styles.smallText}>Details: {productId}</Text>
               <Button
               title='Go to Home'
               // onPress={()=>navigation.navigate("Home")}
               // onPress={()=>navigation.goBack()} // it redirect one screen back but here two screen that why it will redirct to home screen
               onPress={()=>navigation.popToTop()} // it will pop the all element in the navigation stack
               />
          </View>
     )
}

export default Details

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
     },
     smallText: {
          color: "#000000"
     }
})