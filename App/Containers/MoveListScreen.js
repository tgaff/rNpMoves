import React, { PropTypes } from 'react'
import { ScrollView, Text, ListView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import {CINEMATIC_MOVES, QUICK_MOVES} from '../Lib/MoveData'
// Styles
import styles from './Styles/MoveListStyle'

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
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{data.Name} is {data.Type1}</Text>
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
