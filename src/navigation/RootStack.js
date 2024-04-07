import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/dashboard/Dashboard";
import PokemonDetail from "../screens/dashboard/pokemonDetail/PokemonDetail";
import Landing from "../screens/landing/Landing";
import Camera from '../screens/Camera/Camera';
import Profile from '../screens/profile/Profile';
import Multiplayer from '../screens/multiplayers/Multiplayer';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Multiplayer" component={Multiplayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
