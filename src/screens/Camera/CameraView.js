import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./CameraStyles";
import * as ImagePicker from "expo-image-picker";
import Button from "../../components/Button";

const CameraView = () => {
  const [imageSource, setImageSource] = useState(require('../../assets/images/beedrill.png'));

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImageSource({ uri: result.assets[0].uri });
    if (!result.cancelled) {
      // Use the selected image URI here
      console.log(result.uri);
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImageSource({ uri: result.assets[0].uri });
    if (!result.cancelled) {
      // Use the captured image URI here
      console.log(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {imageSource ? (
          <Image source={imageSource} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>No Image Selected</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title={"pick image from gallery"} onPress={pickImage} />
        <Button
          btnStyle={{ marginTop: 8 }}
          title="Take a picture with camera"
          onPress={takePicture}
        />
      </View>
    </SafeAreaView>
  );
};

export default CameraView;
