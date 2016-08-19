import React, { PropTypes } from 'react'
import { ScrollView, Text, ListView, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import * as MoveModel from '../Lib/MoveData'
import HelpModal from '../Components/HelpModal'
// Styles
import styles from './Styles/MoveListStyle'
import {generateStyles} from './Styles/MoveListStyle'

import { Images } from '../Themes'
import { StyleSheet } from 'react-native'


class MoveListScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      openModal: false,
      modal: {
        body: '',
        title: ''
      }

    }
  }

  static propTypes = {
  //  navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }

  _dpsFormat (dps) {
    return Math.floor(100*dps)/100
  }
  _sortMovesByDPS (moves) {
    // sorts in reverse (e.g. highest first)
    return moves.sort( (left, right) => {
      if (left.dps < right.dps) { return 1 }
      if (right.dps < left.dps) { return -1 }
      return 0
    })
  }

  help = {
    attackName: () => {
      let message =
      `The name of this attack or move.\n\n`
      + `Try to choose Pokemon that have the best moves.`
      this._openHelpModal({body: message, title: 'Help: Move Name'})
    },
    damage: () => {
      let message =
      `The total damage that this attack does.`
      +`\n\nMany Quick Moves are quite fast and can be fired very quickly in succession.  `
      +`If two Quick Moves are similarly fast, choose the one with the highest total damage.`
      +`\n\nFor Power Moves, duration varies a lot.  Choose the one with the highest DPS.`
      + `\n Note: that actual damage done is also modified by a number of other factors.`
      this._openHelpModal({body: message, title: 'Help: Damage'})
    },
    dps: () => {
      let message =
      `D.P.S. stands for Damage Per Second.`
      +`\n\nSince each attack takes a specific amount of time, we can use DPS to better compare moves of different durations and damages.`
      +`\n\nIn general, try to choose Pokemon with attacks that have the highest DPS.  `
      +`This will help you maximize every second of battle!`

      this._openHelpModal({body: message, title: 'Help: DPS'})

    },
    duration: () => {
      let message =
      `Duration in Seconds`
      +`\n\nThis is the total amount of time an attack takes.  `
      +`Damage in an attack is caused over this amount of time, not instantly.`

      this._openHelpModal({body: message, title: 'Help: Duration'})

    }




  }
  _renderHeader = () => {
    return (
      <View style={[styles.headerRow]}>
        <TouchableOpacity style={[styles.headerButton, {flex: 2}]} onPress={this.help.attackName}>
          <Text selectable={true} style={[styles.headerText, ]}>ATTACK NAME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton]} onPress={this.help.damage}>
          <Text selectable={true} style={styles.headerText}>DAMAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton]} onPress={this.help.dps}>
          <Text selectable={true} style={styles.headerText}>DPS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton]} onPress={this.help.duration}>
          <Text selectable={true} style={styles.headerText}>DURATION</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderTable =  (rows) => {
    return rows.map( (row)=> {
      console.log("render row", row)

      return this._renderRow(row)
    })
  }
  _renderRow = (rowData) => {
    console.log('row', rowData)
    return (
      <View key={rowData.id} style={styles.row}>
        <Text selectable={true} style={[styles.col, {flex: 2}]}>{rowData.name}</Text>
        <Text selectable={true} style={styles.col}>{rowData.damage}</Text>
        <Text selectable={true} style={styles.col}>{this._dpsFormat(rowData.dps)}</Text>
        <Text selectable={true} style={styles.col}>{rowData.duration}</Text>
      </View>
          )
  }

  _findMonMoves () {
    console.log('I have quickmoves: ',this.props.data.subdata.quickMoves)
    myQuickMoveInfo = this.props.data.subdata.quickMoves.map(function(move) {
      return MoveModel.lookupQuickMoveInfoByName(move.name)
    })
    myQuickMoveInfo = this._sortMovesByDPS(myQuickMoveInfo)

    console.log('I have powermoves: ',this.props.data.subdata.quickMoves)
    myPowerMoveInfo = this.props.data.subdata.powerMoves.map(function(move) {
      return MoveModel.lookupPowerMoveInfoByName(move.name)

    })
    myPowerMoveInfo = this._sortMovesByDPS(myPowerMoveInfo)

    return { quickMoves: myQuickMoveInfo, powerMoves: myPowerMoveInfo}
  }

  componentWillUnmount() {
    console.log('unmount! why sometimes only?!')
  }


    _closeModal = () => {
      this.setState({openModal: null});
    }

    _openHelpModal = (obj) => {
      this.setState({modal: obj})
      this.setState({openModal: true})
    }

  render () {
    //const number = this.props.navigator.navigationContext.currentRoute.passProps.number
    const data = this.props.data
    const name = this.props.data.subdata.name
    const id = this.props.data.subdata.id
    const type1 = this.props.data.subdata.type1
    const type2 = this.props.data.subdata.type2

    const moves = this._findMonMoves()


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



          <Text style={styles.tableLabel}>Quick moves</Text>

          <View>
            {this._renderHeader()}
            {this._renderTable(moves.quickMoves)}
          </View>
          <Text style={styles.tableLabel}>Power moves</Text>
          <View>
            {this._renderHeader()}
            {this._renderTable(moves.powerMoves)}
          </View>


          <HelpModal  title={this.state.modal.title}
                      body={this.state.modal.body}
                      visible={this.state.openModal}/>

        </ScrollView>
    )
  }
}

// map state passed through as part of state
const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  console.log(state)

  return { }
}

export default connect(mapStateToProps)(MoveListScreen)
