// leave off @2x/@3x

// this is REALLY annoying, the react docs say we have to hard-code each image
// and require it or it won't package it
// that means no easy:
// for (let i=1; i<152; i++) {
//   pokemon[i] = require('../Images/characters/' + i + '.png')
// }

import pokemon from './CharacterImages'
import types from './TypeImages'


const images = {
  logo: require('../Images/ir.png'),
  clearLogo: require('../Images/top_logo.png'),
  ignite: require('../Images/ignite_logo.png'),
  tile_bg: require('../Images/tile_bg.png'),
  background: require('../Images/BG.png'),
  pokemon: pokemon,
  types: types
}

export default images
