import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard';
import Camera from '../screens/Camera/Camera';
import Multiplayer from '../screens/multiplayers/Multiplayer';
import PokemonDetail from '../screens/dashboard/pokemonDetail/PokemonDetail';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Dashboard' screenOptions={{   tabBarLabelPosition: "beside-icon",
    tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 15
    }, tabBarIconStyle: { display: "none" }}} >
      <Tab.Screen name="Pokemon" component={Dashboard} />
      <Tab.Screen options={{tabBarLabel: 'Camera',  tabBarIcon: null}} name="Camera" component={Camera} />
      <Tab.Screen name="Multiplayer" component={Multiplayer} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="PokemonDetail" component={PokemonDetail} /> */}
    </Tab.Navigator>
  );
}