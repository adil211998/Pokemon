import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../theme/Colors";

export const SHADOW_STYLE = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});
