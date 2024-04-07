import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  imageContainer: {
    marginBottom: 20,

  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#777",
  },
  buttonContainer: {
    justifyContent: "center",
    marginLeft: 30,
  },
});
