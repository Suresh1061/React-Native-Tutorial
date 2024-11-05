import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff")

  const generateRandomColor = () => {
    const hexRange = "0123456789ABCDEF"

    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setBgColor(color)
  }
  return (
    <>
      <StatusBar backgroundColor={"#000"} />
      <View style={[styles.constiner, { backgroundColor: bgColor }]}>
        <TouchableOpacity onPress={() => generateRandomColor()}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#192A56",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText: {
    color: '#fff',
    fontSize: 18
  }
})