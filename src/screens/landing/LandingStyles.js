import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/theme/Colors";
import { SHADOW_STYLE } from "../../utils/helpers/Helper";
import { windowHeight, windowWidth } from "../../utils/Constant";

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
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Turquoise,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  listWrapper: {
    ...SHADOW_STYLE,
    marginHorizontal: 5,
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
  imgStyle: {
    height: windowHeight,
    width: windowWidth,
  },
});
