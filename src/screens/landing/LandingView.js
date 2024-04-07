import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { styles } from "./LandingStyles";
import Button from "../../components/Button";

const LandingView = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Button
            btnStyle={styles.btn}
            title={"Dashboard"}
            onPress={() => navigation.navigate("Dashboard")}
          />
          <Button
            btnStyle={styles.btn}
            title={"Dashboard Details"}
            onPress={() => navigation.navigate("PokemonDetail")}
          />
          <Button
            btnStyle={styles.btn}
            title={"Profile"}
            onPress={() => navigation.navigate("Profile")}
          />
          <Button
            btnStyle={styles.btn}
            title={"Camera"}
            onPress={() => navigation.navigate("Camera")}
          />
          <Button
            btnStyle={styles.btn}
            title={"Multiplayer"}
            onPress={() => navigation.navigate("Multiplayer")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingView;
