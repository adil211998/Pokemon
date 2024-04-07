import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { memo } from "react";
import { COLORS } from "../utils/theme/Colors";

const Button = ({ onPress, title, btnStyle, titleStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...btnStyle, ...styles.btnWrapper }}
    >
      <Text style={{ ...titleStyle, ...styles.btnTitle }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    height: 50,
    width: "90%",
    borderRadius: 15,
    backgroundColor: COLORS.Turquoise,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: COLORS.White,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default memo(Button);
