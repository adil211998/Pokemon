import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './CameraStyles'

const CameraView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CameraView</Text>
    </SafeAreaView>
  )
}

export default CameraView