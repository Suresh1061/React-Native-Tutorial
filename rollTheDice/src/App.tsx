import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import diceOne from './assets/One.png'
import diceTwo from './assets/Two.png'
import diceThree from './assets/Three.png'
import diceFour from './assets/Four.png'
import diceFive from './assets/Five.png'
import diceSix from './assets/Six.png'

type DicePops = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DicePops): JSX.Element => {
  return (
    <View>
      <Image
        source={imageUrl}
        style={styles.diceImage}
      />
    </View>
  )
}

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne)

  const rollTheDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1
    switch (randomNum) {
      case 1:
        setDiceImage(diceOne)
        break
      case 2:
        setDiceImage(diceTwo)
        break
      case 3:
        setDiceImage(diceThree)
        break
      case 4:
        setDiceImage(diceFour)
        break
      case 5:
        setDiceImage(diceFive)
        break
      case 6:
        setDiceImage(diceSix)
        break
      default:
        setDiceImage(diceOne)
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollTheDice}>
        <Text style={styles.rollDiceBtnText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});