
import { COLORS } from './theme/Colors';
import {Dimensions} from 'react-native';

 const POKEMON_DATA = [
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"), color: COLORS.Turquoise },
  { name: "Butterfree", img: require("../assets/images/butterfree.png") ,  color: COLORS.RadicalRed },
  { name: "Caterpie", img: require("../assets/images/caterpie.png") ,  color: COLORS.GreenYellow },
  { name: "Charizard", img: require("../assets/images/charizard.png") ,  color: COLORS.ScreaminGreen },
  { name: "Charmander", img: require("../assets/images/charmander.png") ,  color: COLORS.BlueViolet },  
  { name: "Charmeleon", img: require("../assets/images/charmeleon.png"), color: COLORS.LightTurquoise },
  { name: "Metapod", img: require("../assets/images/metapod.png"), color: COLORS.Turquoise },
  { name: "Pidgey", img: require("../assets/images/pidgey.png"), color: COLORS.RadicalRed  },
  { name: "Weedle", img: require("../assets/images/weedle.png"), color: COLORS.DodgerBlue },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"),  color: COLORS.GreenYellow },
  { name: "Beedrill", img: require("../assets/images/beedrill.png"), color: COLORS.ScreaminGreen  },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"), color: COLORS.Turquoise },
  { name: "Butterfree", img: require("../assets/images/butterfree.png") ,  color: COLORS.RadicalRed },
  { name: "Caterpie", img: require("../assets/images/caterpie.png") ,  color: COLORS.GreenYellow },
  { name: "Charizard", img: require("../assets/images/charizard.png") ,  color: COLORS.ScreaminGreen },
  { name: "Charmander", img: require("../assets/images/charmander.png") ,  color: COLORS.BlueViolet },  
  { name: "Charmeleon", img: require("../assets/images/charmeleon.png"), color: COLORS.LightTurquoise },
  { name: "Metapod", img: require("../assets/images/metapod.png"), color: COLORS.Turquoise },
  { name: "Pidgey", img: require("../assets/images/pidgey.png"), color: COLORS.RadicalRed  },
  { name: "Weedle", img: require("../assets/images/weedle.png"), color: COLORS.DodgerBlue },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"),  color: COLORS.GreenYellow },
  { name: "Beedrill", img: require("../assets/images/beedrill.png"), color: COLORS.ScreaminGreen  },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"), color: COLORS.Turquoise },
  { name: "Butterfree", img: require("../assets/images/butterfree.png") ,  color: COLORS.RadicalRed },
  { name: "Caterpie", img: require("../assets/images/caterpie.png") ,  color: COLORS.GreenYellow },
  { name: "Charizard", img: require("../assets/images/charizard.png") ,  color: COLORS.ScreaminGreen },
  { name: "Charmander", img: require("../assets/images/charmander.png") ,  color: COLORS.BlueViolet },  
  { name: "Charmeleon", img: require("../assets/images/charmeleon.png"), color: COLORS.LightTurquoise },
  { name: "Metapod", img: require("../assets/images/metapod.png"), color: COLORS.Turquoise },
  { name: "Pidgey", img: require("../assets/images/pidgey.png"), color: COLORS.RadicalRed  },
  { name: "Weedle", img: require("../assets/images/weedle.png"), color: COLORS.DodgerBlue },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"),  color: COLORS.GreenYellow },
  { name: "Beedrill", img: require("../assets/images/beedrill.png"), color: COLORS.ScreaminGreen  },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"), color: COLORS.Turquoise },
  { name: "Butterfree", img: require("../assets/images/butterfree.png") ,  color: COLORS.RadicalRed },
  { name: "Caterpie", img: require("../assets/images/caterpie.png") ,  color: COLORS.GreenYellow },
  { name: "Charizard", img: require("../assets/images/charizard.png") ,  color: COLORS.ScreaminGreen },
  { name: "Charmander", img: require("../assets/images/charmander.png") ,  color: COLORS.BlueViolet },  
  { name: "Charmeleon", img: require("../assets/images/charmeleon.png"), color: COLORS.LightTurquoise },
  { name: "Metapod", img: require("../assets/images/metapod.png"), color: COLORS.Turquoise },
  { name: "Pidgey", img: require("../assets/images/pidgey.png"), color: COLORS.RadicalRed  },
  { name: "Weedle", img: require("../assets/images/weedle.png"), color: COLORS.DodgerBlue },
  { name: "Bulbasaur", img: require("../assets/images/bulbasaur.png"),  color: COLORS.GreenYellow },
  { name: "Beedrill", img: require("../assets/images/beedrill.png"), color: COLORS.ScreaminGreen  },
];


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export {
  windowHeight,
  windowWidth,
  POKEMON_DATA
}