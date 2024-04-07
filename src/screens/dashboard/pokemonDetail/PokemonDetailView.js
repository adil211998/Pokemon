import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './PokemonDetailStyles'

const PokemonDetailView= ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>PokemonDetailView</Text>
        </SafeAreaView>
    )
}

export default PokemonDetailView
