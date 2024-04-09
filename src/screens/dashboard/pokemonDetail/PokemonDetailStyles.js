import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../utils/Constant";
import { COLORS } from '../../../utils/theme/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White
    },
    img: {
        height: windowHeight/2,
        width: windowWidth,
        backgroundColor: 'transparent'
      },
      name:{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          color: COLORS.Black,
          marginTop: 20
      },
      body:{
          flex: 0.65
      }
}) 