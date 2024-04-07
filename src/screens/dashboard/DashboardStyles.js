import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme/Colors";
import { SHADOW_STYLE } from "../../utils/helpers/Helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  listWrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.White,
    ...SHADOW_STYLE,
  },
  img: {
    height: 60,
    width: 60,
  },
  listItems: {
    height: 120,
    width: 160,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  textStyle: {
    color: COLORS.White,
    fontWeight: "500",
    marginVertical: 4,
  },
});
