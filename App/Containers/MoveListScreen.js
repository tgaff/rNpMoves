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

    console.log('I have powermoves: ',this.props.data.subdata.quickMoves)
    myPowerMoveInfo = this.props.data.subdata.powerMoves.map(function(move) {
      return allMoves.powerMoves.find(function(item) {
        console.log('compare item.name:', item.name, ' with move: ', move)
        return item.name.toLowerCase() == move.name.toLowerCase()
      })
    })

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.state = {
      myMoves: {
        quickMoves: myQuickMoveInfo,
        powerMoves: myPowerMoveInfo
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

  _renderHeader = () => {
    return (
      <View style={[styles.row, {margin: 2}]}>
        <Text selectable={true} style={[styles.header, {flex: 2, marginLeft: 8}]}>Attack</Text>
        <Text selectable={true} style={styles.header}>Damage</Text>
        <Text selectable={true} style={styles.header}>DPS</Text>
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
      <View style={styles.row}>
        <Text selectable={true} style={[styles.col, {flex: 2}]}>{rowData.name}</Text>
        <Text selectable={true} style={styles.col}>{rowData.dps}</Text>
        <Text selectable={true} style={styles.col}>{rowData.damage}</Text>
      </View>
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



          <Text style={styles.tableLabel}>Quick moves</Text>

          <View>
            {this._renderHeader()}
            {this._renderTable(this.state.myMoves.quickMoves)}
          </View>
          <Text style={styles.tableLabel}>Power moves</Text>
          <View>
            {this._renderHeader()}
            {this._renderTable(this.state.myMoves.powerMoves)}
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
