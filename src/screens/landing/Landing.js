import React, { useState } from "react";
import LandingView from "./LandingView";
import { COLORS } from "../../utils/theme/Colors";

const Landing = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = [
    {
      name: "Beedrill",
      img: require("../../assets/images/beedrill.png"),
      color: COLORS.DodgerBlue,
    },
    {
      name: "Bulbasaur",
      img: require("../../assets/images/bulbasaur.png"),
      color: COLORS.GreenYellow,
    },
    {
      name: "Charizard",
      img: require("../../assets/images/charizard.png"),
      color: COLORS.ScreaminGreen,
    },
  ];
  return (
    <LandingView
      data={data}
      selectedIndex={selectedIndex}
      navigation={navigation}
      setSelectedIndex={setSelectedIndex}
    />
  );
};

export default Landing;
