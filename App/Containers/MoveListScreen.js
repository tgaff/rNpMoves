import React, { PropTypes } from 'react'
import { ScrollView, Text, ListView, TouchableHighlight, View, Image } from 'react-native'
import { connect } from 'react-redux'
import * as MoveModel from '../Lib/MoveData'
// Styles
import styles from './Styles/MoveListStyle'
import {generateStyles} from './Styles/MoveListStyle'

import { Images } from '../Themes'
import { StyleSheet } from 'react-native'


class MoveListScreen extends React.Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
  //  navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }


  _sortMovesByDPS (moves) {
    // sorts in reverse (e.g. highest first)
    return moves.sort( (left, right) => {
      if (left.dps < right.dps) { return 1 }
      if (right.dps < left.dps) { return -1 }
      return 0
    })
  }

  _renderHeader = () => {
    return (
      <View style={[styles.row, {margin: 2}]}>
        <Text selectable={true} style={[styles.header, {flex: 2, marginLeft: 8}]}>Attack</Text>
        <Text selectable={true} style={styles.header}>Damage</Text>
        <Text selectable={true} style={styles.header}>DPS</Text>
        <Text selectable={true} style={styles.header}>Duration (sec)</Text>
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
        <Text selectable={true} style={styles.col}>{rowData.dps}</Text>
        <Text selectable={true} style={styles.col}>{Math.floor(100* rowData.damage/rowData.dps, 2)/100}</Text>
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
