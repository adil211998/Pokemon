
import React from 'react'
import PokemonDetailView from './PokemonDetailView';

const PokemonDetail = ({navigation, route}) => {
  return (
    <PokemonDetailView navigation={navigation} route={route} />
  )
}

export default PokemonDetail