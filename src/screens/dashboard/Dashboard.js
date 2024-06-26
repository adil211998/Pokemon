
import React from 'react'
import DashboradView from './DashboradView'
import { POKEMON_DATA } from '../../utils/Constant';

const Dashboard = ({navigation}) => {
  return (
 <DashboradView navigation={navigation} data={POKEMON_DATA} />
  )
}

export default Dashboard