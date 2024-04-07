import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.White,
    marginTop: 30,
  },
  btn: {
    marginBottom: 5,
  },
});
