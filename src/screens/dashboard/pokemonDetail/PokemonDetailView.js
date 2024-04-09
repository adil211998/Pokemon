import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { styles } from "./PokemonDetailStyles";

const PokemonDetailView = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={route?.params?.img}
        />
        <Text style={styles.name}>{route?.params?.name}</Text>
    </SafeAreaView>
  );
};

export default PokemonDetailView;
