import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./LandingStyles";
import Button from "../../components/Button";
import Swiper from "react-native-swiper";
import { COLORS } from "../../utils/theme/Colors";

const LandingView = ({ navigation, selectedIndex, setSelectedIndex, data }) => {
  const renderPokemon = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("MyTabs")}
        style={styles.listWrapper}
        key={index}
      >
        <View style={{ ...styles.listItems, backgroundColor: item.color }}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image style={styles.img} source={item.img} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        dotColor={COLORS.White}
        style={styles.wrapper}
        showsButtons={true}
        onIndexChanged={(index) => setSelectedIndex(index)}
        autoplay={true}
      >
        <View style={styles.slide1}>
          <Image
            style={styles.imgStyle}
            source={require("../../assets/images/intro_1.jpg")}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={styles.imgStyle}
            source={require("../../assets/images/intro_2.jpg")}
          />
        </View>
        <View style={styles.slide3}>
          <FlatList
            style={{ marginTop: 20 }}
            data={data}
            numColumns={data?.length > 0 ? 2 : 1}
            renderItem={renderPokemon}
            keyExtractor={(index, item) => index.toString()}
          />
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default LandingView;
