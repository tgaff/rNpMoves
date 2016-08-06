import React, { PropTypes } from 'react'
import { ScrollView, Text, ListView, TouchableHighlight, View, Image } from 'react-native'
import { connect } from 'react-redux'
import {CINEMATIC_MOVES, QUICK_MOVES} from '../Lib/MoveData'
// Styles
import styles from './Styles/MoveListStyle'
import {generateStyles} from './Styles/MoveListStyle'

import { Images } from '../Themes'
import { StyleSheet } from 'react-native'


class MoveListScreen extends React.Component {

  constructor (props) {
    super(props)

    // const quickMoves = this.props.data.QuickMoves
    console.log('props: ', props)

    const allMoves = {
      powerMoves: CINEMATIC_MOVES,
      quickMoves: QUICK_MOVES
    }
    console.log('I have quickmoves: ',this.props.data.subdata.quickMoves)
    myQuickMoveInfo = this.props.data.subdata.quickMoves.map(function(move) {
      return allMoves.quickMoves.find(function(item) {
        console.log('compare item.name:', item.name, ' with move: ', move)
        return item.name.toLowerCase() == move.name.toLowerCase()
      })
    })
    //myQuickMoveInfo = [...new Set(myQuickMoveInfo)] // FIXME why aren't moves already unique?

    console.log('I have powermoves: ',this.props.data.subdata.quickMoves)
    myPowerMoveInfo = this.props.data.subdata.powerMoves.map(function(move) {
      return allMoves.powerMoves.find(function(item) {
        console.log('compare item.name:', item.name, ' with move: ', move)
        return item.name.toLowerCase() == move.name.toLowerCase()
      })
    })
    //myPowerMoveInfo = [...new Set(myPowerMoveInfo)] // FIXME why aren't moves already unique?


    // console.log('quick moves', this.props.data.QuickMoves)
    // Datasource is always in state
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      myMoves: {
        quickMoves: ds.cloneWithRows(myQuickMoveInfo),
        powerMoves: ds.cloneWithRows(myPowerMoveInfo)
      }
    }

    // interesting stuff
    // console.log('routes', props.navigator.state.routeStack)
    // console.log(this.props.navigator.navigationContext.currentRoute)
    //props.number = this.props.navigator.navigationContext.currentRoute.passProps.number;
  }

  static propTypes = {
  //  navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }


  _renderRow = (rowData) => {
    console.log('row', rowData)
    return (  <TouchableHighlight onPress={ () => console.log('clicked')  }>
              <Text style={styles.item}>({rowData.name} - {rowData.dps})</Text>
            </TouchableHighlight>
          )
  }


  render () {
    //const number = this.props.navigator.navigationContext.currentRoute.passProps.number
    const data = this.props.data
    const name = this.props.data.subdata.name
    const id = this.props.data.subdata.id
    const type1 = this.props.data.subdata.type1
    const type2 = this.props.data.subdata.type2
    console.log('new style using', type1, generateStyles(type1))
    const containerStyle = generateStyles(type1).container
    return (
      <ScrollView style={containerStyle}>
        <View style={[styles.section, styles.monOverview]}>

          <View>
            <Image style={[styles.inlineImage, styles.monImage]} source={Images.pokemon[id]} />
          </View>

          <View style={{ flex: 1}}>
            <Text style={styles.sectionHeader} selectable={true}>{name}</Text>
            <View style={ styles.monTypeView }>
              <Text style={styles.monTypeText} selectable={true}>{type1}</Text>
              <Text style={styles.monTypeText} selectable={true}>{type2}</Text>
            </View>
          </View>

        </View>

        <Text style={styles.text}>Quick moves</Text>
        <ListView
            initialListSize={100}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.myMoves.quickMoves}
            renderRow={this._renderRow}
        />
        <Text style={styles.text}>Power moves</Text>
        <ListView
            initialListSize={100}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.myMoves.powerMoves}
            renderRow={this._renderRow}
        />

      </ScrollView>
    )
  }
}

// map state passed through as part of state
const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log(state)
  // const myMoves = {
  //   powerMoves: this.props.data.CinematicMoves,
  //   quickMoves: this.props.data.QuickMoves
  // }
  return { }
  //   allMoves: {
  //     powerMoves: CINEMATIC_MOVES,
  //     quickMoves: QUICK_MOVES,
  //   },
  //   myMoves: myMoves
  // }
}

export default connect(mapStateToProps)(MoveListScreen)
