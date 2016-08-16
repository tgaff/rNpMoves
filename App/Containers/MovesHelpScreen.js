import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/MovesHelpScreenStyle'

class MovesHelpScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.h3}>How to use this app</Text>
        <Text style={styles.normal}>
        This app is designed to help you decide which Pokémon to keep and power-up.
        </Text>

        <Text style={styles.h5}>Moves Attributes</Text>
        <Text style={styles.normal}>
        In Pokémon Go moves have the following attributes:
        </Text>
        <Text style={styles.li}>* Damage - the <Text style={styles.strong}> total damage</Text> that this move does.</Text>
        <Text style={styles.li}>* Duration - the amount of time the move takes to perform.</Text>

        <Text style={styles.h5}>
          DPS: Damage Per Second
        </Text>
        <Text style={styles.normal}>
          DPS gives us a way to compare moves of different durations.
          DPS is a calculated value based on <Text style={styles.blue}>Damage</Text> divided by <Text style={styles.blue}>Duration</Text>.

          Your goal in battle is to do <Text style={styles.strong}>as much damage</Text> as possible, <Text style={styles.strong}>as quickly</Text> as possible.
          Maximizing the damage per second (DPS) that you inflict will lead you to victory.
        </Text>

        <Text style={styles.h5}>
          Choosing Pokémon
        </Text>
        <Text style={styles.h6}>-  to keep:</Text>
        <Text style={styles.normal}>
        When choosing which pokemon to keep, the order of things to consider is:
        </Text>
        <Text style={styles.li}>
          1) Moves - choose moves that do the maximum damage in the shortest time. (DPS)
        </Text>
        <Text style={styles.li}>
          2) IVs (Individual Values) - each Pokemon has specific Attack, Defense and Stamina attributes.
        </Text>
        <Text style={styles.li}>
          3) Level - if you don't know the level, you can use CP to estimate (or use an IV calculator).
        </Text>
        <Text style={styles.li}> </Text>
        <Text style={styles.li}>
          Note: Level is not as important in determining whether to keep a mon.  Why?
          If you have a great mon, with the best moves, and good IVs it's probably worth it to use your candy to power it up!
        </Text>

        <Text style={styles.h6}>-  for battle:</Text>
        <Text style={styles.normal}>When choosing pokemon to use in a battle consider: </Text>

        <Text style={styles.li}>1) Type - certain types are strong versus others, some types are weaker.</Text>
        <Text style={styles.li}>2) Level - If you don't know the level, you can use CP to estimate.</Text>

        <Text style={styles.li}>3) Moves - choose the one with the best moves in order to do the most damage.</Text>
        <Text style={styles.li}>4) IVs</Text>

        <Text style={styles.h5}>
          Other things to keep in mind
        </Text>
        <Text style={styles.li}>* When a Pokémon evolves it gets new random moves.</Text>
        <Text style={styles.li}>* STAB or Same Type Attack Bonus comes into effect if a move has the same type as the Pokémon.</Text>
        <Text style={styles.li}>* STAB can contribute as much as 25% more damage.</Text>
        <Text style={styles.li}>* IV stands for Individual Values</Text>
        <Text style={styles.li}>* Each Pokémon has IVs for <Text style={styles.strong}>attack, defense and stamina</Text>.</Text>

        <Text style={styles.h4}> </Text>


      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovesHelpScreen)
