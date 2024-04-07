import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import { styles } from "./DashboardStyles";

const DashboradView = ({ data, navigation }) => {
  const renderPokemon = ({ item, index }) => {
    return (
      <View style={styles.listWrapper} key={index}>
        <View style={{ ...styles.listItems, backgroundColor: item.color }}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image style={styles.img} source={item.img} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ marginTop: 20 }}
        data={data}
        numColumns={data?.length > 0 ? 2 : 1}
        renderItem={renderPokemon}
        keyExtractor={(index, item) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default DashboradView;
